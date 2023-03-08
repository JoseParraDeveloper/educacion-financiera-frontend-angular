import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  title: string = "Usuarios";
  showTable: boolean = true;
  users!: User[];

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getListUser().subscribe(
      users => {
        this.users = users;
        console.log(users);
        if (!(this.users != null && this.users.length > 0)) {
          this.showTable = false;
        }
      }
    );
  }

  updateUser(user: User) {
    localStorage.clear();
    localStorage.setItem("idUser", user.id.toString());
    this.router.navigate(["/signup"]);
  }

  deleteUser(user: User) {
    this.alertConfirmation(user);
  }

  alertConfirmation(user: User) {
    Swal.fire({
      title: 'Usuario ' + user.name,
      text: '¿Desea desactivarlo o eliminarlo de la aplicación?',
      showCancelButton: true,
      confirmButtonText: 'Desactivar',
      cancelButtonText: 'Eliminar',
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red'
    }).then((result) => {
      if (result.value) {
        user.active = false;
        this.userService.updateUser(user).subscribe(
          user => {
            Swal.fire({
              title: 'Usuario ' + user.name,
              text: 'Fue desactivado con éxito!!',
              icon: 'success',
              confirmButtonColor: 'blue'
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: 'Error al desactivar al usuario.',
              icon: 'error',
              confirmButtonColor: 'blue'
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: '¿Estas seguro de eliminar al usuario ' + user.name + ' de la aplicación?',
          text: 'Este proceso es irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
          confirmButtonColor: 'blue',
          cancelButtonColor: 'red'
        }).then((result) => {
          if (result.value) {
            this.userService.deleteUserById(user.id).subscribe(
              () => {
                this.getAllUsers();
                Swal.fire({
                  title: 'Eliminado',
                  text: 'Usuario eliminado con éxito!!',
                  icon: 'success',
                  confirmButtonColor: 'blue'
                });
              },
              (error) => {
                Swal.fire({
                  title: 'Error',
                  text: 'Error al eliminar el usuario.',
                  icon: 'error',
                  confirmButtonColor: 'blue'
                });
              }
            );

          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: 'Cancelado',
              text: 'El usuario esta aún en la aplicación.',
              icon: 'error',
              confirmButtonColor: 'blue'
            });
          }
        });
      }
    });
  }
}
