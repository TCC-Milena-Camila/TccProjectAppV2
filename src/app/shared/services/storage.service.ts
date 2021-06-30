import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

@Injectable()
export class StorageService {

  set$(key: string, value: any): Observable<void> {

    const setPromise = Storage.set({ key, value: JSON.stringify(value) });
    const set$ = from(setPromise);

    return from(Storage.migrate())
        .pipe(
            switchMap(() => set$),
        );
  }

  get$(key: string): Observable<any> {

    const getPromise = Storage.get({ key });
    const get$ = from(getPromise)
        .pipe(
            map((item) => JSON.parse(item.value)),
        );

    return from(Storage.migrate())
        .pipe(
            switchMap(() => get$),
        );
  }

  remove(key: string) {

    const removePromise = Storage.remove({ key });
    const remove$ = from(removePromise);

    return from(Storage.migrate())
        .pipe(
            switchMap(() => remove$),
        );
  }

  clear(): Observable<void> {

    const clear$ = from(Storage.clear());

    return from(Storage.migrate())
        .pipe(
            switchMap(() => clear$),
        );
  }
}
