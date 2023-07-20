import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, provideRouter } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowNavbarService } from './services/showNavbar.service';
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
  { path: 'About', component: AboutComponent, canActivate:[() => sessionStorage.getItem("isLoggedIn") === 'true'] },
  { path: 'Contacts', component: ContactsComponent, canActivate:[() => sessionStorage.getItem("isLoggedIn") === 'true']},
  { path: 'Main', component: MainPageComponent, canActivate:[() => sessionStorage.getItem("isLoggedIn") === 'true'] },
  { path: '', component: UserLoginComponent, canActivate:[() => sessionStorage.getItem("isLoggedIn") === 'false']},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ShowNavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
