import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimeApp';
  showRoutes = false;
  user = localStorage.getItem("CURRENT_USER") || "";


  constructor(private router: Router) { }



  logOut(): void {
    localStorage.removeItem("CURRENT_USER");
    this.router.navigate(['']);
  }
}
