import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoleComponent } from './Role/create-role/create-role.component';
import { ListRolesComponent } from './Role/list-roles/list-roles.component';
import { SignupComponent } from './Signup/signup/signup.component';

const routes: Routes = [
  {
    path: 'roles-list', component: ListRolesComponent, pathMatch: 'full'
  },
  { path: 'roles-list/create-role', component: CreateRoleComponent, pathMatch: 'full' },
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
