import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  /* { path:'',
    children: [
      { path:'login', component: LoginComponent },
      { path:'**', component: PageNotFoundComponent }
    ]
  }, */
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'login', component: LoginComponent, data: { title:'Login Page' } },
  { path:'**', component: PageNotFoundComponent, data: { title:'Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule { }