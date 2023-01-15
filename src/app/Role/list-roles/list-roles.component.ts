import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/Models/Role';
import { RoleService } from 'src/app/Services/role.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles!: Role[];
  title: string = "Roles en la aplicación";
  showTable: boolean = true;

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRoles();
  }


  private getAllRoles() {
    this.roleService.getListRole().subscribe(
      role => {
        this.roles = role;
        if (!(this.roles != null && this.roles.length > 0)) {
          this.showTable = false;
          this.alertInformation();
        }
      }
    );
  }

  editar(role: Role): void {
    localStorage.setItem("idRole", role.id.toString());
    this.router.navigate(["roles-list/create-role"]);
  }

  delete(roleDelete: Role) {
    this.alertConfirmation(roleDelete);
  }

  alertInformation() {
    Swal.fire({
      title: 'No se encuentran roles creados en el sistema. ¿Desea crear un role?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(["roles-list/create-role"]);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['']);
      }
    });
  }




  alertConfirmation(roleDelete: Role) {
    Swal.fire({
      title: '¿Estas seguro de eliminar el ' + roleDelete.name + ' de la aplicación?',
      text: 'Este proceso es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red'
    }).then((result) => {
      if (result.value) {
        this.roleService.deleteRoleById(roleDelete.id).subscribe(
          (data) => {
            this.getAllRoles();
            Swal.fire({
              title: 'Eliminado',
              text: 'Role eliminado con éxito!!',
              icon: 'success',
              confirmButtonColor: 'blue'
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Error al eliminar el role.',
              icon: 'error',
              confirmButtonColor: 'blue'
            });
          }
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelado',
          text: 'El role esta aún en la aplicación.',
          icon: 'error',
          confirmButtonColor: 'blue'
        });
      }
    });
  }
}
