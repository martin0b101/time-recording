import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TimeApp';
  showRoutes = false;
  user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1
  }
  ngOnDestroy(): void {
    this.user = (localStorage.getItem("CURRENT_USER")?.length) || 0 > 1
  }

  // isUserLoggedIn(): boolean {
  //   return this.user > 1;
  // }

  logOut(): void {
    localStorage.removeItem("CURRENT_USER");
    this.router.navigate(['']);
    this.user = false;
  }
}
