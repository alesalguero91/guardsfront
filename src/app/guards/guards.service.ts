import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../Service/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate{

  realRol: string;

  constructor(

    private tokenService: TokenServiceService,
    private router: Router

  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol =>{
      if(rol === "ROLE_ADMIN"){
        this.realRol= 'admin'
      }

    })
    if(!this.tokenService.getToken()|| expectedRol.indexOf(this.realRol)===-1){
        this.router.navigate(['/'])
        return false
    }
    return true
  }
}

