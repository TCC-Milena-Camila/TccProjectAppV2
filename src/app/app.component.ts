import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ContaService} from './conta/services/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private contaService: ContaService, private router: Router) {}

  ngOnInit(): void {
    this.contaService.clearApiToken();
    this.router.navigate(['/login']);
  }
}
