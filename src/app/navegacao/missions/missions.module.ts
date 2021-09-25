import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionsPageRoutingModule } from './missions-routing.module';

import { MissionsPage } from './missions.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { NavegacaoModule } from './../navegacao.module';
import { InternalHeaderComponent } from '../../components/internal-header/internal-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionsPageRoutingModule,
    SharedModule,
    NavegacaoModule,
  ],
  exports: [
    InternalHeaderComponent,
  ],
  declarations: [MissionsPage, InternalHeaderComponent],
})
export class MissionsPageModule {}
