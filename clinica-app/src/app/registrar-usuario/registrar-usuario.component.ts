import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  msg: string = "";
   
  saveContato(data: any) {
      this.serviceUsuario.save(data).subscribe( () => this.msg = "Contato salvo com sucesso"  )
 }

 constructor(private serviceUsuario: UsuarioService) { }

 gravar(dados: any){
  this.serviceUsuario.gravar(dados).subscribe(x => window.location.reload())
}

 ngOnInit(): void {
 }

 excluir(id:any){
  this.serviceUsuario.excluir(id).subscribe(x => {window.location.reload()})
}
}