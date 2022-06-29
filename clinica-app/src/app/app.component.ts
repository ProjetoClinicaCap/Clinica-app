import { AuthAdm } from './auth/auth-adm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'clinica-app';

  userLogado: any = {};
  administrador: boolean = false;
  usuarioConectado: boolean = false;


  pegarPerfilUsuarioConectado() {
    let user: string | null = localStorage.getItem('userConectado');
    if (user != null) {
      user = JSON.parse(user);
      this.userLogado = user;
      console.log(user);

    }
  }
  constructor(private AuthAdm: AuthAdm) {


  }
  ngOnInit(): void {
    this.pegarPerfilUsuarioConectado();
    this.administrador = this.AuthAdm.ehAdministrador();
    this.usuarioConectado = this.AuthAdm.temUsuarioLogado();

    console.log(this.administrador)

  }

}
