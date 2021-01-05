import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../core/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user : User[] = [];
  selectedUser : User = {name : '' , phoneNumber : 0 , email : '',password : '', confirmPassword : ''};
  isLoggedIn : boolean;
  constructor(private router : ActivatedRoute , private route : Router) { 
  }

  registerUser(value : User){
  this.user.push(value);
  this.route.navigate(['profile'])
  };

  verifyUser(values: any) : boolean{
   for(let i of this.user){
    if(i.name  === values.name && i.password === values.password){
      this.isLoggedIn = true;
      return true;
    }
   }
  };

  getUserDetails() : any{
  return this.user;
  };

  isUserLoggedIn(){
  return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
