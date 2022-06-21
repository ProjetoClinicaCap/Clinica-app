import { Usuario2Service } from './usuario2.service';
import { ResponseLogin } from './ResponseLogin';
import { DecodeTokenService } from './decode-token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient,
    private Usuario2Service: Usuario2Service) {}

  authenticate(email: string, senha: string) {
    return this.http
      .post(
        'https://clinica-cap.herokuapp.com/usuario/login',
        {
          email: email,
          senha: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          let response: ResponseLogin;
          response = res.body as ResponseLogin;
          this.Usuario2Service.setToken(response.token);
        })
      );
  }
}
