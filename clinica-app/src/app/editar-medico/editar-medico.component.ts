import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceContatoService } from '../service-contato.service';
import { ServiceEspecialidadeService } from '../service-especialidade.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {

  contato: any = {};

  msg: string = "";
  especialidades: string[];

  constructor(private route: ActivatedRoute, 
    private serviceContato: ServiceContatoService,
    private serviceEspecialidade: ServiceEspecialidadeService) {    
      this.especialidades = new Array();
  }


  efetivarAlteracao(){
    this.serviceContato.alterar(this.contato).subscribe(x => this.msg = "Registro alterado com sucesso" )
  }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let idcontato: number = Number(routeParams.get('idcontato'))
    this.serviceContato.getOne(idcontato).subscribe(x => this.contato = x)
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