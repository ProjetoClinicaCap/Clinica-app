import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-consulta-contato',
  templateUrl: './consulta-contato.component.html',
  styleUrls: ['./consulta-contato.component.css'],
})
export class ConsultaContatoComponent implements OnInit {
  filtro: string = '';

  contatos: any;

  constructor(private serviceContato: ServiceContatoService) {
    this.serviceContato.getAll().subscribe((x) => (this.contatos = x));
  }

  ngOnInit(): void {}

  excluir(id: any) {
    this.serviceContato.excluir(id).subscribe((x) => {
      window.location.reload();
    });
  }
}
