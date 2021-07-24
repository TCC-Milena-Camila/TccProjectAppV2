import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Achievement } from '../../interfaces/achievement';
import { SliderAchievementsComponent } from './slider-achievements/slider-achievements.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends SliderAchievementsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
