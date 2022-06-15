import { Pipe, PipeTransform } from '@angular/core';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ServiceContatoService } from './service-contato.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any{
    if (filtro) {
      filtro = filtro.toUpperCase();
      
      return value.filter(a =>
          a.especialidade.especialidade.toUpperCase().indexOf(filtro) >= 0
      );
  } else {
    return value;
        }
    }
}


