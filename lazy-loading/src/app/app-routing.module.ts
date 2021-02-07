import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationGuard } from '../app/authorization.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate:[AuthorizationGuard] , data:{ title:'Auth' }  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), data:{ title:'Product' } },
  { path: '**', component: PageNotFoundComponent, data:{ title:'Page Not Found' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/lazy-loading'  },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule { }
