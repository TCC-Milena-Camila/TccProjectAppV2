import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import {ContaGuard} from './conta/services/conta.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./conta/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'login',
    canActivate: [],
    loadChildren: () => import('./conta/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    canLoad:[ContaGuard],
    canActivateChild:[ContaGuard],
    component: MenuComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./navegacao/home/home.module').then(
            m => m.HomePageModule),
      }
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
