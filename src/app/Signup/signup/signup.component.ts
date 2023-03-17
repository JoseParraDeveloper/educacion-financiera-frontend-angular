import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/Models/User';
import { MediaService } from 'src/app/Services/media.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  titleTable!: string;
  nameButton!: string;
  mensajeValidacionEmail: string = "";
  isEdit: boolean = false;
  imgCodifiedBase64!: string;
  imageLogin: string = '../../assets/login.png';
  url!: string;
  imageUpload: any;

  constructor(private userService: UserService, private router: Router, private toast: NgToastService, private mediaService: MediaService) { }

  ngOnInit(): void {
    let idUser = localStorage.getItem("idUser");
    if (idUser != null) {
      this.userService.getUserById(Number(idUser)).subscribe(
        updateUser => {
          this.user = updateUser;
          this.isEdit = true;
        }
      );
      this.titleTable = "Actualización del usuario";
      this.nameButton = "Actualizar";
    } else {
      this.titleTable = "Registrate aquí";
      this.nameButton = "Registrar";
    }
    localStorage.clear();
  }

  onSubmit(): void {
    if (this.isEdit) {
      if (this.imageUpload) {
        const formData = new FormData();
        formData.append('file', this.imageUpload);
        this.mediaService.uploadFile(formData).subscribe(
          response => {
            this.url = response.url;
            this.user.image = this.url;
            this.userService.registerUser(this.user).subscribe(
              updateUser => {
                this.showSuccess('Registro de usuario', 'El usuario ' + updateUser.name + ' fue registrado con éxito.');
                this.router.navigate(['']);
              }, () => {
                this.showError('Registro de usuario', 'Error al registrar el usuario. Username y/o Email ya existen.');
              }
            );
          }
        );
      } else {
        this.userService.updateUser(this.user).subscribe(
          (updateUser) => {
            this.showSuccess('Actualización de usuario', 'El usuario ' + updateUser.name + ' fue actualizado con éxito.');
            this.router.navigate(['list-users']);
          }, () => {
            this.showError('Actualización de usuario', 'Error al actualizar el usuario. Username y/o Email ya existen.');
          }
        );
      }
    } else {
      if (this.imageUpload) {
        const formData = new FormData();
        formData.append('file', this.imageUpload);
        this.mediaService.uploadFile(formData).subscribe(
          response => {
            this.url = response.url;
            this.user.image = this.url;
            this.userService.registerUser(this.user).subscribe(
              newUser => {
                this.showSuccess('Registro de usuario', 'El usuario ' + newUser.name + ' fue registrado con éxito.');
                this.router.navigate(['']);
              }, () => {
                this.showError('Registro de usuario', 'Error al registrar el usuario. Username y/o Email ya existen.');
              }
            );
          }
        );
      } else {
        this.userService.registerUser(this.user).subscribe(
          newUser => {
            this.showSuccess('Registro de usuario', 'El usuario ' + newUser.name + ' fue registrado con éxito.');
            this.router.navigate(['']);
          }, () => {
            this.showError('Registro de usuario', 'Error al registrar el usuario. Username y/o Email ya existen.');
          }
        );
      }
    }
  }

  isValidoEmail(): boolean {
    let isValidoEmail: boolean = true;
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (this.user.email != undefined && this.user.email != "" && !regex.test(this.user.email)) {
      isValidoEmail = false;
    }
    return isValidoEmail;
  }

  isValidForm(): boolean {
    return ((this.user.name != undefined && this.user.name.length > 0)
      && (this.user.password != undefined && this.user.password.length > 0)
      && (this.user.surname != undefined && this.user.surname.length > 0)
      && (this.user.username != undefined && this.user.username.length > 0)
      && this.isValidoEmail()
    );
  }

  capturarFile(event: any) {
    let supportedImages = ["image/jpeg", "image/png", "image/gif"];
    this.imageUpload = event.target.files[0];
    if (supportedImages.indexOf(this.imageUpload.type) != -1) {
      this.extraerBase64(this.imageUpload).then((imagen: any) => {
        this.imgCodifiedBase64 = imagen.base;
      });
    } else {
      console.log('Se encontraron formatos no validos!!');
    }
  }

  extraerBase64 = async ($event: any) => new Promise(resolve => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = () => {
        resolve({
          base: null
        });
      };
    } catch (e) {

    }
  });

  showSuccess(details: string, summary: string) {
    this.toast.success({ detail: details, summary: summary, duration: 5000 });
  }

  showError(details: string, summary: string) {
    this.toast.error({ detail: details, summary: summary, duration: 5000 });
  }
}