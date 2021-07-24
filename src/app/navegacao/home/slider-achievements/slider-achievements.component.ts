import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from '../../../interfaces/achievement';
import { ConquistaModel } from '../../../shared/models/conquista.model';

@Component({
  selector: 'app-slider-achievements',
  templateUrl: './slider-achievements.component.html',
  styleUrls: ['./slider-achievements.component.scss'],
})
export class SliderAchievementsComponent implements OnInit {

  @Input()
  conquistas: ConquistaModel[];

  constructor() { }

  ngOnInit() {
  }
}
