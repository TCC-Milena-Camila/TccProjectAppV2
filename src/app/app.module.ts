import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavegacaoModule } from './navegacao/navegacao.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './shared/user.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
      AppComponent,
      MenuComponent,
  ],
  entryComponents: [],
  imports: [
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production,
    }),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NavegacaoModule,
    NgbModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
