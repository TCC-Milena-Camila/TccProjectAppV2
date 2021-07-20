import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {UserModel} from '../../shared/models/user.model';
import {ContaService} from '../../conta/services/conta.service';
import {map} from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/shared/user.state';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/shared/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Select(UserState.getUser)
  user$: Observable<UserModel>;


  // user: UserModel = {
  //   id: '',
  //   email: '',
  //   nome: '',
  //   pontuacao: 0,
  //   ranking: 0,
  //   time: ''
  // };

  constructor(private contaService: ContaService, private store: Store,) {
  }

  ngOnInit() {
    this.store.dispatch(new UserActions.Get())
  }

}
