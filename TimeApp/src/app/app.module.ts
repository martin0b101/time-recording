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
import { TimeTrackingService } from './services/tracking.service';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Contacts', component: ContactsComponent },
  { path: 'Main', component: MainPageComponent },
  { path: '', component: UserLoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    PageNotFoundComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
