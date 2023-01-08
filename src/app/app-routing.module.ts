import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './Role/list-roles/list-roles.component';

const routes: Routes = [
  {
    path: 'roles-list', component: ListRolesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
