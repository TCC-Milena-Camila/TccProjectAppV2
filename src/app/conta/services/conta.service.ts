import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from './../models/usuario';
import { catchError, map } from 'rxjs/operators';
import { ApiResponseModel } from './../models/api-response.model';
import { Observable, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable()
export class ContaService {
  private _authenticateUrl = `${environment.api}/sigin`;
  private _storageTokenKey = 'api.token';
  private _storageUserKey = 'api.user';

  constructor(
    private _apiService: ApiService,
    private _storageService: StorageService
  ) {}

  login(usuario: Usuario) {
    const auth$ = this._apiService.post$(this._authenticateUrl, usuario);

    return auth$.pipe(
      map((response: ApiResponseModel) => response.data),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  salvarDadosLocaisUsuario(response: any): void {
    this._storageService.set$(this._storageTokenKey, response.acessToken);
    this._storageService.set$(this._storageUserKey, response.usuario);
  }

  public limparDadosLocaisUsuario() {
    localStorage.removeItem(this._storageTokenKey);
    localStorage.removeItem(this._storageUserKey);
  }

  public obterUsuario() {
    return JSON.parse(localStorage.getItem(this._storageUserKey));
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem(this._storageTokenKey);
  }

  clearApiToken() {
    this._storageService.remove(this._storageTokenKey);
    this._storageService.remove(this._storageUserKey);
  }
}
