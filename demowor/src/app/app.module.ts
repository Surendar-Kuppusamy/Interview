import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './Modules_Views/login/login.component';
//import { ProfilesComponent } from './Modules_Views/profiles/profiles.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AjaxService } from './Services/Ajax/ajax.service';



const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  /* { path:'**', component: PageNotFoundComponent }, */
  { path:'login', component: LoginComponent },
  /* { path:'signup', loadChildren: () => import('./Modules_Views/signup/signup.module').then(m => m.SignupModule) }, */
  /* { path:'profile', component: ProfilesComponent },
  { path:'profile/:id', component: ProfilesComponent }, */

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //ProfilesComponent,
    //PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "ignore"}),
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/demo' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
