import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';
import { ServiceEspecialidadeService } from '../service-especialidade.service';

interface Dias {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css'],
})
export class CadastroContatoComponent implements OnInit {
  dia: Dias[] = [
    { value: 'Segunda-feira', viewValue: 'Segunda-Feira' },
    { value: 'Terça-feira', viewValue: 'Terça-Feira' },
    { value: 'Quarta-feira', viewValue: 'Quarta-feira' },
    { value: 'Quinta-feira', viewValue: 'Quinta-feira' },
    { value: 'Sexta-feira', viewValue: 'Sexta-Feira' },
  ];
  msg: string = '';
  especialidades: string[];
  constructor(
    private serviceContato: ServiceContatoService,
    private serviceEspecialidade: ServiceEspecialidadeService
  ) {
    this.especialidades = new Array();
  }
  saveContato(data: any) {
    this.serviceContato
      .save(data)
      .subscribe((x) => (this.msg = 'Contato salvo com sucesso'));
  }
  ngOnInit(): void {
    this.loadEspecialidades();
  }
  async loadEspecialidades() {
    const result = await this.serviceEspecialidade
      .getAllEspecialidade()
      .toPromise();
    if (result) {
      this.especialidades = result;
    }
  }
  get listaEspecialidades(): any {
    return this.especialidades;
  }
}
