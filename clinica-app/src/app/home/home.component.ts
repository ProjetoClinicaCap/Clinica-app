import { AuthAdm } from './../auth/auth-adm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
