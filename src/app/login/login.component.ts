import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../Models/User';
import { UserLogin } from '../Models/UserLogin';
import { TokenService } from '../Services/token.service';
import { UserLoginService } from '../Services/user-login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  isLoginFail: boolean = false;
  userLogin!: UserLogin;
  username!: string;
  password!: string;
  roles: string[] = [];
  titleTable!: string;

  constructor(private userLoginService: UserLoginService, private tokenService: TokenService, private router: Router, private toast: NgToastService, public _location: Location) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onSubmit(): void {
    this.userLogin = new UserLogin(this.username, this.password);
    this.userLoginService.loginUser(this.userLogin).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.showSuccess('Login de usuario', 'Login con éxito!!');
        this.router.navigate(['/home']);
      }, (error: HttpErrorResponse) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.showError('Login de usuario', 'El nombre de usuario y/o password son incorrectos.');
      }
    );
  }

  isValidLogin(): boolean {
    return ((this.password != undefined && this.password.length > 0)
      && (this.username != undefined && this.username.length > 0));
  }

  showSuccess(details: string, summary: string) {
    this.toast.success({ detail: details, summary: summary, duration: 5000 });
  }

  showError(details: string, summary: string) {
    this.toast.error({ detail: details, summary: summary, sticky: true });
  }
}


