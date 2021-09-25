import { NgModule } from '@angular/core';

import {RankingPageRoutingModule} from './ranking-routing.module';
import { RankingPage } from './ranking.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { NavegacaoModule } from './../navegacao.module';
import { InternalHeaderComponent } from '../../components/internal-header/internal-header.component';

@NgModule({
  imports: [
    SharedModule,
    NavegacaoModule,
    RankingPageRoutingModule,
  ],
  declarations: [RankingPage, InternalHeaderComponent],
})
export class RankingModule {}
