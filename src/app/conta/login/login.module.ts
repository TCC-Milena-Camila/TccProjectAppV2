import {NgModule} from '@angular/core';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {SharedModule} from 'src/app/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../auth.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([AuthState]),
    SharedModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
