import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowNavbarService } from './services/showNavbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TimeApp';
  showRoutes = false;
  showNavbar = false;
  user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1


  constructor(private router: Router, private navbarService: ShowNavbarService) {
    this.navbarService.showNavBarEmitter.subscribe((mode) => {
      this.showNavbar = mode;
    });
   }

  ngOnInit(): void {
    this.user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1
  }
  ngOnDestroy(): void {
    this.user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1
  }

  logOut(): void {
    localStorage.removeItem("CURRENT_USER");
    this.router.navigate(['']);
    this.navbarService.showNavBar(false);
    this.user = false;
  }
}
