import { Component, OnInit } from '@angular/core';
import { Achievement } from '../../../interfaces/achievement';

@Component({
  selector: 'app-slider-achievements',
  templateUrl: './slider-achievements.component.html',
  styleUrls: ['./slider-achievements.component.scss'],
})
export class SliderAchievementsComponent implements OnInit {

  achievements: Achievement[] = [];

  constructor() { }

  ngOnInit() {

    this.achievements = [
      {
        iconName: 'Jardineiro',
        iconURL: '/assets/ic-medal-garden.svg',
      },
      {
        iconName: 'Gari',
        iconURL: '/assets/ic-medal-trash.svg',
      },
    ];
  }
}
