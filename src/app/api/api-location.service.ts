import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../interface/location.model';
import { ApiHttpService } from './api-http.service';

@Injectable()
export class LocationApiService {
    constructor(private http: ApiHttpService) {}

    readonly method = 'location';

    getById(id: number) {
      return this.http.get<Location>(`${this.method}/${id}`);
    }
}
