import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  logar(email: string, senha: string){
    console.log(email,senha);
    return this.http.post('https://clinica-cap.herokuapp.com/usuario/login',{
      email: email,
      senha: senha
    })
  }
}