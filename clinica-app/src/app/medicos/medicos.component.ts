import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  contatos: any;

  constructor(private serviceContato: ServiceContatoService) { 
    this.serviceContato.getAll().subscribe(x => this.contatos = x)
  }
  ngOnInit(): void {
  }

}
