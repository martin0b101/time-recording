import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  
  login = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)])
  });
 
  constructor(private router: Router) { }

  onSubmit(): void {
    console.log("Username is:", this.login.value.username);

    if(this.login.value.username){
      if (!localStorage.getItem(this.login.value.username)){
        localStorage.setItem(this.login.value.username, JSON.stringify(
        {START_TIME_MAIN: 0, TIME_MAIN: 0, START_TIME_ABOUT:0, TIME_ABOUT: 0, START_TIME_CONTACTS:0, TIME_CONTACTS: 0}));
      }

      localStorage.setItem("CURRENT_USER", this.login.value.username);
      this.router.navigate(['Main']);
    }
  }
}
