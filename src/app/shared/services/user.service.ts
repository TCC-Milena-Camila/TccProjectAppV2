import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable, throwError} from 'rxjs';
import {UserModel} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import { UserResponseModel } from './../models/user-response.model';

@Injectable()
export class UserService {

  private _associateUrl = `${ environment.api }/Pessoa`;

  constructor(private apiService: ApiService) {
  }

  get$(): Observable<UserModel> {
    return this.apiService
      .get$(this._associateUrl)
      .pipe(
        map((userResponse: UserResponseModel) => new UserModel(userResponse)),
        catchError((error) => {

          console.log(error);
          return throwError(error);
        })
      );
  }
}
