import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {LoadingOptions} from '@ionic/core';
import {from, Observable} from 'rxjs';
import {first, map, tap} from 'rxjs/operators';

@Injectable()
export class LoadingIndicatorService {

  private activeLoading: HTMLIonLoadingElement;
  private isPresenting = false;

  constructor(private _loadingController: LoadingController) {
  }

  present(options?: LoadingOptions) {

    const loadingCreation$ = from(
        this._loadingController
            .create({ translucent: true, spinner: 'crescent', ...options }));

    return loadingCreation$
        .pipe(
            tap((loading: HTMLIonLoadingElement) => {
              this.activeLoading = loading;
            }),
            map((loading: HTMLIonLoadingElement) =>
                loading.present()),
            first(),
        )
        .subscribe({
          next: () => {

            this.isPresenting = true;
          },
        });
  }

  dismiss(): Observable<boolean> {

    if (!this.isPresenting) {

      return;
    }

    return from(this.activeLoading.dismiss())
        .pipe(tap(() => this.isPresenting = false));
  }
}
