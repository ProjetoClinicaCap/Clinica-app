import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';
import { ServiceEspecialidadeService } from '../service-especialidade.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

  msg: string = "";

  especialidades: string[];
 


  constructor(private serviceContato: ServiceContatoService, 
              private serviceEspecialidade: ServiceEspecialidadeService) {
    
    this.especialidades = new Array();
  }

   
  saveContato(data: any) {
    this.serviceContato.save(data).subscribe( x => this.msg = "Contato salvo com sucesso"  )       
}

  
  ngOnInit(): void {
    this.loadEspecialidades();
  }

  async loadEspecialidades() {
    const result = await this.serviceEspecialidade.getAllEspecialidade().toPromise();    
    if(result) {
      this.especialidades = result;
    }
  }

  get listaEspecialidades(): any {
    return this.especialidades;
  }
}