import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  username!: string;
  roles!: string[];
  isAdmin: boolean = false;
  imageLogin: string = '../../assets/login.png';


  constructor(private tokenService: TokenService, private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.username = this.tokenService.getUsername();
      this.userService.getUserByUsername(this.username).subscribe(
        userLogged => {
          if (userLogged.image) {
            this.imageLogin = userLogged.image;
          }
        }
      );
    } else {
      this.isLogged = false;
    }
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut(): void {
    this.router.navigate(['/home']);
    this.tokenService.logOut();
  }

}
