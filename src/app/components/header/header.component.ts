import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() shouldShowMenuButton = false;
  @Input() shouldShowNotificationButton = true;
  @Input() svgColor: string;

  constructor() { }

  ngOnInit() {}

}
