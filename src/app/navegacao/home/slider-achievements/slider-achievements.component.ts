import { Component, Input, OnInit } from '@angular/core';
import { ConquistaModel } from '../../../shared/models/conquista.model';

@Component({
  selector: 'app-slider-achievements',
  templateUrl: './slider-achievements.component.html',
  styleUrls: ['./slider-achievements.component.scss'],
})
export class SliderAchievementsComponent implements OnInit {

  @Input()
  conquista: ConquistaModel;

  constructor() {
  }

  ngOnInit() {
  }
}
