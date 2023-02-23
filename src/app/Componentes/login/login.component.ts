import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Models/login-usuario';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { TokenServiceService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged= false
  isLoginfail= false
  loginUsaurio: LoginUsuario
  nombreUsuario:string
  password: string
  roles: string[] = []

  errorMsj: string

  constructor(
    private tokenService: TokenServiceService,
    private autService: AuthServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true
      this.isLoginfail = false
      this.roles = this.tokenService.getAuthorities()
    }
  }

  onLogin():void{
    this.loginUsaurio = new LoginUsuario(this.nombreUsuario, this.password)
    this.autService.login(this.loginUsaurio).subscribe(
      data =>{
        this.isLogged=true
        this.isLoginfail= false

        this.tokenService.setToken(data.token)
        this.tokenService.setUserName(data.nombreUsuario)
        this.tokenService.setAuthorities(data.authorities)
        this.roles = data.authorities

        this.router.navigate(['lista'])
      }
    ),
    err=> {
      this.isLogged=false
      this.isLoginfail=true

      this.errorMsj = err.error.mensaje;
      console.log(this.errorMsj)
    }
  }

}
