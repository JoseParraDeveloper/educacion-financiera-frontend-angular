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

  constructor(private userService: UserService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.titleTable = "Registrate aquí";
    this.nameButton = "Registrar";

  }

  onSubmit(): void {
    this.userService.registerUser(this.user).subscribe(
      newUser => {
        this.showSuccess('Registro de usuario', 'El usuario ' + newUser.name + ' fue registrado con éxito.');
        this.router.navigate(['']);
      }
    );
  };

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
    this.toast.error({ detail: details, summary: summary, sticky: true, duration: 5000 });
  }

}
