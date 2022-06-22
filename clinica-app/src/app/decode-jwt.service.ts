import { Injectable } from '@angular/core';
import jwt from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class DecodeJWTService {

  public decodeTokenJWT(): string {
    try{
      let token = localStorage.getItem('token') || ''
      return jwt(token)
    }
    catch(error){
      return ''
    }
  }
}
