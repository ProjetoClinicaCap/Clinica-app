import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica-app';

  userLogado: any = {}
  decodeJWT: any;
  pegarPerfilUsuarioConectado(){
    let user: (string | null) = localStorage.getItem("userConectado")
    if(user != null){
      user = JSON.parse(user)
      this.userLogado = user
    }
  }
  constructor(){
    this.pegarPerfilUsuarioConectado();
  }
/****** */
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
