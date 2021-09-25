import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionPageRoutingModule } from './mission-routing.module';

import { MissionPage } from './mission.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { NavegacaoModule } from './../navegacao.module';
import { MissionsPageModule } from '../missions/missions.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    MissionPageRoutingModule,
    SharedModule,
    NavegacaoModule,
    MissionsPageModule,
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
  declarations: [MissionPage]
})
export class MissionPageModule {}
