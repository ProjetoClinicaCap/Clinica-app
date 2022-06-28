import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  getOne(id: number) {
    return this.http.get(`https://clinica-cap.herokuapp.com/usuario/${id}`);
  }
  alterar(dados: any) {
    let url = `https://clinica-cap.herokuapp.com/usuario/${dados.id}`;
    return this.http.put(url, dados);
  }
  excluir(id: number) {
    return this.http.delete(`https://clinica-cap.herokuapp.com/usuario/${id}`);
  }

  constructor(private http: HttpClient) {}

  save(data: any) {
    let url = 'https://clinica-cap.herokuapp.com/usuario';
    return this.http.post(url, data);
  }

  getAll() {
    let url = 'https://clinica-cap.herokuapp.com/usuario';
    return this.http.get(url);
  }

  gravar(dados: any) {
    let url = '';
    return this.http.post(url, dados);
  }
}
