import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  entryComponents:[],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class NavegacaoModule { }
