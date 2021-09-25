import { Component, OnInit, Output } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/shared/user.state';
import { Observable } from 'rxjs';
import { UserActions } from 'src/app/shared/user.actions';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {

  @Select(UserState.getUser)
  user$: Observable<UserModel>;

  @Output() filter: string;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new UserActions.Get());
    this.filter = 'todas';
  }

  segmentChanged(ev: any) {
    this.filter = ev.detail.value;
  }
}
