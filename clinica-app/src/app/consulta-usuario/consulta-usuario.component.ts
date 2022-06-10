import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {

  usuarios: any;

  constructor(private serviceUsuario: UsuarioService ) {
    this.serviceUsuario.getAll().subscribe(x => this.usuarios = x)
   }

  ngOnInit(): void {
  }

  excluir(id:any){
    this.serviceUsuario.excluir(id).subscribe(x => {window.location.reload()})
 }

}