import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  gravar(dados: any){
    let url = 'http://localhost:8080/usuario'
    return this.http.post(url,dados)
  }

  getOne(idcontato: number){
    return this.http.get(`http://localhost:8080/usuario/${idcontato}`)
  }
  alterar(dados:any){
    let url = `http://localhost:8080/usuario/${dados.id}`
    return this.http.put(url, dados)
  }
  excluir(idcontato : number) {
    return this.http.delete(`http://localhost:8080/usuario/${idcontato}`)
  }


  constructor(private http: HttpClient) {  }

  save(data: any){
    let url = 'http://localhost:8080/usuario'
    return this.http.post(url, data);
  }

  getAll(){
    let url = 'http://localhost:8080/medico'
    return this.http.get(url)
  }
}