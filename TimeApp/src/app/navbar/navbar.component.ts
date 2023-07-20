import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowNavbarService } from '../services/showNavbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private navbarService: ShowNavbarService){}

  get isLoggedIn(): boolean {
    return this.navbarService.isLoggedInUser();
  }

  logOut(): void {
    localStorage.removeItem("CURRENT_USER");
    this.router.navigate(['']);
    this.navbarService.logout();
  }

}
