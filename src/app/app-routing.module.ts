import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ContaGuard } from './conta/services/conta.guard';

const routes: Routes = [
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
      },
      {
        path: 'ranking',
        loadChildren: () => import('./navegacao/ranking/ranking.module').then(
            m => m.RankingModule),
      },
      {
        path: 'missoes',
        loadChildren: () => import('./navegacao/missions/missions.module').then(
            m => m.MissionsPageModule),
      },
      {
        path: 'missao',
        loadChildren: () => import('./navegacao/mission/mission.module').then( m => m.MissionPageModule)
      }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ContaGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
