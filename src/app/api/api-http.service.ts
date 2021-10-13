import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class HttpServiceBase {
  constructor(
    protected readonly http: HttpClient,
    protected readonly baseUrl: string
  ) {}

  get<T>(url: string, params?: HttpParams) {
    const observable = this.http.get(`${this.baseUrl}/${url}`, { params });
    return this.toJsonPromise<T>(url, observable);
  }

  toJsonPromise<T>(url: string, observable: Observable<Object>) {
    return observable.pipe(map((response) => response as T)).toPromise<T>();
  }
}

@Injectable()
export class ApiHttpService extends HttpServiceBase {
  static readonly baseUrl = 'https://rickandmortyapi.com/api';

  constructor(http: HttpClient){
      super(http, ApiHttpService.baseUrl)
  }
}
