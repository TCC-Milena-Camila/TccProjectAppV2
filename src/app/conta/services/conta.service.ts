import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUserModel } from '../models/login-user.model';
import { Observable, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserModel } from '../../shared/models/user.model';
import { catchError, map } from 'rxjs/operators';
import { ApiResponseModel } from '../models/api-response.model';
import { LoginRequestModel } from './../models/login-request.model';

@Injectable()
export class ContaService {
  private _authenticateUrl = `${environment.api}/sigin`;
  private _storageTokenKey = 'api.token';
  private _storageUserKey = 'api.user';
  private _headerKey = 'CapacitorStorage.';

  constructor(
    private _apiService: ApiService,
    private _storageService: StorageService
  ) {}

  login(usuario: LoginRequestModel) {
    const auth$ = this._apiService.post$(this._authenticateUrl, usuario);

    return auth$.pipe(
      //tap(next => this.store.set('user', next)),
      map((response: ApiResponseModel) => response.data),
      catchError((error) => {
        console.log('erro na aut: ', error);
        return throwError(error);
      })
    );
  }

  salvarDadosLocaisUsuario(response: any): void {
    this._storageService.set$(this._storageTokenKey, response.acessToken);
    this._storageService.set$(this._storageUserKey, response.usuario);
  }

  salvarTokenUsuario(accessToken: string): void {
    this._storageService.set$(this._storageTokenKey, accessToken);
  }

  public obterTokenUsuarioStorage(): Observable<string> {
    return this._storageService.get$(this._storageTokenKey);
  }

  public obterUsuarioStorage(): Observable<UserModel> {
    return this._storageService.get$(this._headerKey + this._storageTokenKey);
  }

  clearApiToken() {
    this._storageService.remove(this._storageTokenKey);
    this._storageService.remove(this._storageUserKey);
  }
}
