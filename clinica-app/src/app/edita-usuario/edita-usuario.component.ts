import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css']
})
export class EditaUsuarioComponent implements OnInit {
  user: any = {};

  msg: string = "";

  constructor(private route: ActivatedRoute,
    private serviceUsuario: UsuarioService,) { }


  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get('id'))
    this.serviceUsuario.getOne(id).subscribe(x => this.user = x)
  }

  efetivarAlteracao(){
    this.serviceUsuario.alterar(this.user).subscribe(x => this.msg = "Registro alterado com sucesso" )
  }


}
