import { Usuario2Service } from './usuario2.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {DecodeJWTService} from './decode-jwt.service'

@Injectable({
  providedIn: 'root'
})
export class AuthAdm implements CanActivate  {

  constructor(private decodeJWT: DecodeJWTService,
    private router: Router, private Usuario2Service: Usuario2Service) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> {

      if(!this.temUsuarioLogado()){
        this.router.navigate(['/login'])
        return false
     }

     if(!this.ehAdministrador()){
       this.router.navigate(['/erro'])
     }

     return true;
  }

  temUsuarioLogado(): boolean {
    let token =  this.decodeJWT.decodeTokenJWT()
    return token != "";
  }

  ehAdministrador(){
    let token =  JSON.stringify(this.decodeJWT.decodeTokenJWT())
    let ob = JSON.parse(token)
    return ob.perfil == 'ADM'
  }

}
