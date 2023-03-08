import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Role } from '../Models/Role';
import { TokenService } from '../Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  roles!: string[];

  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRol'];
    this.roles = this.tokenService.getAuthorities();
    let realRol = 'user';
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        realRol = 'admin';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(realRol) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
