import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-header',
  templateUrl: './internal-header.component.html',
  styleUrls: ['./internal-header.component.scss'],
})
export class InternalHeaderComponent implements OnInit {

  @Input() pageTitle: string;

  constructor() { }

  ngOnInit() {}

}
