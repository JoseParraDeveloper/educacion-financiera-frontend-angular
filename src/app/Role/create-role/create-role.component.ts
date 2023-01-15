import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Role } from 'src/app/Models/Role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  tableTitle!: string;
  nameButton!: string;

  role: Role = new Role();
  isEdit: boolean = false;
  constructor(private roleService: RoleService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    let idRole = localStorage.getItem("idRole");
    if (idRole != null) {
      this.roleService.getRoleById(Number(idRole)).subscribe(
        updateRole => {
          this.role = updateRole;
        }
      );
      this.tableTitle = 'Editar role';
      this.nameButton = 'Actualizar';
      this.isEdit = true;
    } else {
      this.tableTitle = 'Crear role';
      this.nameButton = 'Crear';
      this.isEdit = false;
    }
    localStorage.clear();
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.roleService.updateRole(this.role).subscribe(
        (updateRole) => {
          this.showSuccess('Actualización de role', 'Role ' + updateRole.name + ' fue actualizado con éxito.');
          this.router.navigate(['roles-list']);
        }
      );
    } else {
      this.roleService.createRole(this.role).subscribe(
        (newRole) => {
          this.showSuccess('Creación de role', 'Role ' + newRole.name + ' fue creado con éxito.');
          this.router.navigate(['roles-list']);
        }, (error) => {
          this.showError();
        }
      );
    }

    this.role = new Role();
  }

  isValidForm(): boolean {
    return (this.role.name != undefined && this.role.name.length > 0 && this.role.description != undefined && this.role.description.length > 0);
  }

  showSuccess(details: string, summary: string) {
    this.toast.success({ detail: details, summary: summary, duration: 5000 });
  }

  showError() {
    this.toast.error({ detail: "Creación de role", summary: 'Ha ocurrido un error', sticky: true });
  }

}
