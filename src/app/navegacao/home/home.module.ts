import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavegacaoModule } from './../navegacao.module';
import { SliderAchievementsModule } from '../../components/slider-achievements/slider-achievements.module';

@NgModule({
  imports: [
    SharedModule,
    NavegacaoModule,
    HomePageRoutingModule,
    SliderAchievementsModule,
    NgCircleProgressModule.forRoot({
      backgroundColor: '#ffffff',
      innerStrokeColor: '#D4D4D4',
      innerStrokeWidth: 10,
      outerStrokeColor: '#7E0001',
      outerStrokeWidth: 10,
      space: -10,
      backgroundPadding: 7,
      radius: 80,
      maxPercent: 100,
      showTitle: false,
      showSubtitle: false,
      showUnits: false,
      responsive: true
    })
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
