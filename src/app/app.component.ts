import { Component } from '@angular/core';
import { from } from 'rxjs';
import {AuthenticationService} from '../app/core/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parangat';
  constructor(private authService : AuthenticationService){
  }

  get isLoggedIn(){
    return this.authService.isUserLoggedIn()
  }

  get notLoggedIn(){
    return this.authService.logout();
  }

  OnLoggedIn($event:any){
    console.log('enter', $event);
  //this.isLoggedIn = $event.value;
  }
}
