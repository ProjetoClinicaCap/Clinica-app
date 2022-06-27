import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceContatoService {

  getOne(idcontato: number){
    return this.http.get(`https://clinica-java.herokuapp.com/medico/${idcontato}`)
  }
  alterar(dados:any){
    let url = `https://clinica-java.herokuapp.com/medico/${dados.id}`
    return this.http.put(url, dados)
  }
  excluir(idcontato : number) {
    return this.http.delete(`https://clinica-java.herokuapp.com/medico/${idcontato}`)
  }


  constructor(private http: HttpClient) {  }

  save(data: any){
    let url = 'https://clinica-java.herokuapp.com/medico'
    return this.http.post(url, data);
  }

  getAll(){
    let url = 'https://clinica-java.herokuapp.com/medico'
    return this.http.get(url)
  }



}
