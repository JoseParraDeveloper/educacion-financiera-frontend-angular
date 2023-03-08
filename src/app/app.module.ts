import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { ListRolesComponent } from './Role/list-roles/list-roles.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRoleComponent } from './Role/create-role/create-role.component'
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { SignupComponent } from './Signup/signup/signup.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { interceptProvider } from './interceptors/user-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListRolesComponent,
    CreateRoleComponent,
    SignupComponent,
    ListUsersComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  
  ],
  providers: [interceptProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
