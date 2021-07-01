import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  CanLoad,
} from '@angular/router';
import { ContaService } from './conta.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaGuard implements CanLoad, CanActivateChild {
  constructor(private contaService: ContaService) {}

  canActivateChild(): Observable<boolean> {
    const getApiTokenOnStorage$ = this.contaService.obterTokenUsuarioStorage();

    return getApiTokenOnStorage$.pipe(map((token) => !!token));
  }

  canLoad(): Observable<boolean> {
    const getApiTokenOnStorage$ = this.contaService.obterTokenUsuarioStorage();

    return getApiTokenOnStorage$.pipe(map((token) => !!token));
  }

}
