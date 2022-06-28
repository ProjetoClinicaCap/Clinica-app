import { DecodeTokenService } from './decode-token.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class Usuario2Service {
  private userSubject = new BehaviorSubject<Usuario>(null!);
  private userName!: string;
  private perfil!: string;

  constructor(private DecodeToken: DecodeTokenService) {
    this.DecodeToken.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.DecodeToken.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.DecodeToken.getToken();
    const user = jwt_decode(token!) as Usuario;
    this.userName = user.email;
    this.perfil = user.perfil;
    this.userSubject.next(user);
  }

  logout() {
    this.DecodeToken.removeToken();
    this.userSubject.next(null!);
  }

  isLogged() {
    return this.DecodeToken.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
