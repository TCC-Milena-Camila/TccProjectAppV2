import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserModel } from '../../shared/models/user.model';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/shared/user.state';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/shared/user.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Select(UserState.getUser)
  user$: Observable<UserModel>;

  constructor(private menu: MenuController, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new UserActions.Get());
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
