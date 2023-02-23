import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../Models/nuevo-usuario';
import { Observable } from 'rxjs';

import { JwtDto } from '../Models/jwt-dto';
import { LoginUsuario } from '../Models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authUrl = "http://localhost:8080/auth/"

  constructor(private httpclient: HttpClient) { }

  public nuevo (nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpclient.post<any>(this.authUrl + "nuevo", nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpclient.post<JwtDto>(this.authUrl+ "login", loginUsuario)
  }

}
