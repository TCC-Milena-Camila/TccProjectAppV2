import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiResponseModel} from 'src/app/conta/models/api-response.model';


@Injectable()
export class ApiService {

  private _headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  constructor(private _httpClient: HttpClient) { }

  get$(url: string){
    const getService$ = this._httpClient.get(
      url,
      {
        headers: this._headers
      }
    );

    return getService$.pipe(
      map((response: ApiResponseModel) => response.data),
      catchError((response)=>{
        console.log(response);
        return throwError(
          (response.error) ? response.error.message : 'Erro Inesperado');
      }),
    );

  }

  post$(url: string, params: any) {

    const postService$ = this._httpClient.post(
        url,
        params,
        {
          headers: this._headers,
        },
    );

    return postService$
        .pipe(
            catchError((response) => {
              console.log(response);

              return throwError(
                  (response.error)
                  ? response.error.message
                  : 'Erro inesperado');
            }),
        );
  }

}
