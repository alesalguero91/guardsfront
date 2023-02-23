import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Models/nuevo-usuario';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isRegisted= false
  isRegistedfail= false

  nuevoUsuario: NuevoUsuario

  nombre: string;
  nombreUsuario: string;
  email: string
  password: string

  isLogged= false
  errorMsj: string


  constructor(
    private tokenService: TokenServiceService,
    private autService: AuthServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true
    }
  }

  onRegister():void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email,this.password)
    this.autService.nuevo(this.nuevoUsuario).subscribe(
      data =>{
        this.isRegisted=true
        this.isRegistedfail= false


        this.router.navigate([''])
      }
    ),
    err=> {
      this.isRegisted=false
      this.isRegistedfail=true

      this.errorMsj = err.error.mensaje;
    }
  }


}
