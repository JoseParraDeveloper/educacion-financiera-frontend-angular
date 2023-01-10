import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/Models/Role';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles!: Role[];
  title: string = "Roles en la aplicación";

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRoles();
  }


  private getAllRoles() {
    this.roleService.getListRole().subscribe(
      role => {
        this.roles = role;
      }
    );
  }

  editar(role: Role): void {
    localStorage.setItem("idRole", role.id.toString());
    this.router.navigate(["roles-list/create-role"]);
  }

  delete(roleDelete: Role) {
    localStorage.setItem("idRole", roleDelete.id.toString());
  }
}
