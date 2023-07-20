import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ShowNavbarService } from '../services/showNavbar.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'], 
  providers: [ShowNavbarService]
})

export class UserLoginComponent {
  
  login = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(2)])
  });
 
  constructor(private router: Router, private navbarShow: ShowNavbarService) { }

  onSubmit(): void {
    console.log("Username is:", this.login.value.username);

    if(this.login.value.username){
      if (!localStorage.getItem(this.login.value.username)){
        localStorage.setItem(this.login.value.username, JSON.stringify(
        { TIME_MAIN: 0, TIME_ABOUT: 0, TIME_CONTACTS: 0}));
      }
      localStorage.setItem("CURRENT_USER", this.login.value.username);
      this.navbarShow.login();
      console.log("Navbar show: ", this.navbarShow)
      this.router.navigate(['Main']);
    }
  }
}
