import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DecodeTokenService } from '../decode-token.service';
import { UsuarioService } from '../usuario.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


 

  constructor(
    private auth: AuthenticationService,
    private decodeToken: DecodeTokenService,
    private router: Router) { }

  logar(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token => {
        localStorage.setItem('token', JSON.stringify(token))

      } 
    )
  }

  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario) 
  }
  
  
}