import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../core/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor( private authService : AuthenticationService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.verifyUser){
      console.log('valid');
      return true;
    }
  }
  
}
