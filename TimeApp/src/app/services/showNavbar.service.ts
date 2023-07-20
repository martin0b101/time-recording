import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ShowNavbarService {
    private readonly sessionStorageKey = 'isLoggedIn';
    private isLoggedIn: boolean = false;

    constructor() { 
        this.isLoggedIn = sessionStorage.getItem(this.sessionStorageKey) === 'true';
    }
  
    login() {
      this.isLoggedIn = true;
      sessionStorage.setItem(this.sessionStorageKey, 'true');
    }
  
    logout() {
      this.isLoggedIn = false;
      sessionStorage.setItem(this.sessionStorageKey, 'false');
    }
  
    isLoggedInUser(): boolean {
      return sessionStorage.getItem(this.sessionStorageKey) === 'true';
    }
}