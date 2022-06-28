import { Usuario2Service } from './../usuario2.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private Usuario2Service: Usuario2Service,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.Usuario2Service.isLogged()) {
      this.router.navigate(['/home', this.Usuario2Service.getUserName()]);
      return false;
    }
    return true;
  }
}
