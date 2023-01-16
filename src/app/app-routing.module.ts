import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoleComponent } from './Role/create-role/create-role.component';
import { ListRolesComponent } from './Role/list-roles/list-roles.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';

const routes: Routes = [
  {
    path: 'list-roles', component: ListRolesComponent, pathMatch: 'full'
  },
  { path: 'roles-list/create-role', component: CreateRoleComponent, pathMatch: 'full' },
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full'
  },
  {
    path: 'list-users/signup', component: SignupComponent, pathMatch: 'full'
  },
  {
    path: 'list-users', component: ListUsersComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
