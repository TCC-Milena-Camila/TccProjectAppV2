import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/shared/user.state';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/shared/user.actions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {

  @Select(UserState.getUser)
  user$: Observable<UserModel>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new UserActions.Get());
  }
}
