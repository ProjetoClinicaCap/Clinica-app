import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspecialidadeService {

  constructor(private http: HttpClient) { }

  getAllEspecialidade() : Observable<string[]> {
    let url = 'http://localhost:8080/especialidade'
    return this.http.get<string[]>(url)
  }
}