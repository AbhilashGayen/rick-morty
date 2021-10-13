import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterResponse } from '../interface/character.model';
import { ApiHttpService } from './api-http.service';

@Injectable()
export class CharacterApiService {
  constructor(private http: ApiHttpService) {}

  readonly method = 'character';

  getAll() {
    return this.http.get<CharacterResponse>(this.method);
  }

  getById(id: number) {
    return this.http.get<Character>(`${this.method}/${id}`);
  }

  getByPage(page: number) {
    return this.http.get<CharacterResponse>(`${this.method}/?page=${page}`);
  }
}
