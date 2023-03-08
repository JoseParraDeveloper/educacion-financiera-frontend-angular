import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/Models/User';
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

  constructor(private userService: UserService, private router: Router, private toast: NgToastService) { }

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
      this.userService.updateUser(this.user).subscribe(
        (updateUser) => {
          this.showSuccess('Actualización de usuario', 'El usuario ' + updateUser.name + ' fue actualizado con éxito.');
          this.router.navigate(['list-users']);
        }, (error) => {
          this.showError('Actualización de usuario', 'Error al actualizar el usuario. Username y/o Email ya existen.');
        }
      );
    } else {
      this.userService.registerUser(this.user).subscribe(
        newUser => {
          this.showSuccess('Registro de usuario', 'El usuario ' + newUser.name + ' fue registrado con éxito.');
          this.router.navigate(['']);
        }, (error) => {
          this.showError('Registro de usuario', 'Error al registrar el usuario. Username y/o Email ya existen.');
        }
      );
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

  showSuccess(details: string, summary: string) {
    this.toast.success({ detail: details, summary: summary, duration: 5000 });
  }

  showError(details: string, summary: string) {
    this.toast.error({ detail: details, summary: summary, duration: 5000 });
  }
}
