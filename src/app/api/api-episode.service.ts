import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../interface/episode.model';
import { ApiHttpService } from './api-http.service';

@Injectable()
export class EpisodeApiService {
  constructor(private http: ApiHttpService) {}

  readonly method = 'episode';

  get(numbers: string[]) {
    let numbersString = numbers.join(',');
    if (numbers.length < 2) {
      return this.http.get<Episode>(`${this.method}/${numbersString}`);
    }
    return this.http.get<Episode[]>(`${this.method}/${numbersString}`);
  }

  // getEpisode(episodeNumber: string) {
  //   return this.http.get<Episode>(`${this.method}/${episodeNumber}`);
  // }
  // getMultipleEpisodes(episodeNumbers: string) {
  //   return this.http.get<Episode[]>(`${this.method}/${episodeNumbers}`);
  // }
}
