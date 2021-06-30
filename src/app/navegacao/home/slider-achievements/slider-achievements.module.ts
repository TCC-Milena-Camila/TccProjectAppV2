import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderAchievementsComponent } from './slider-achievements.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [
        SliderAchievementsComponent
    ],
    imports: [
        CommonModule,
        SwiperModule
    ],
    exports: [
        SliderAchievementsComponent
    ]
})
export class SliderAchievementsModule { }
