import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateRoleComponent } from './Role/create-role/create-role.component';
import { ListRolesComponent } from './Role/list-roles/list-roles.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';
import { UserGuardService as guard } from './guards/user-guard.service';

const routes: Routes = [
  {
    path: 'list-roles', component: ListRolesComponent, pathMatch: 'full', canActivate: [guard], data: { expectedRol: ['admin'] }
  },
  { path: 'create-role', component: CreateRoleComponent, pathMatch: 'full', canActivate: [guard], data: { expectedRol: ['admin'] } },
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'list-users', component: ListUsersComponent, pathMatch: 'full', canActivate: [guard], data: { expectedRol: ['admin'] }
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
