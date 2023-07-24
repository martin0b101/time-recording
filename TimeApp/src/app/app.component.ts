import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowNavbarService } from './services/showNavbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimeApp';
}
