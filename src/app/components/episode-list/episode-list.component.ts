import { Component, Input, OnInit } from '@angular/core';
import { EpisodeApiService } from 'src/app/api/api-episode.service';
import { Episode } from 'src/app/interface/episode.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
  providers: [EpisodeApiService],
})
export class EpisodeListComponent implements OnInit {
  @Input() episodeRefs: string[];
  episodes: Episode[];

  constructor(private api: EpisodeApiService) {}

  ngOnInit(): void {
    const epNumbers = this.episodeRefs.map((e) =>
      e.substring(e.lastIndexOf('/') + 1)
    );

    this.api.get(epNumbers).then((response) => {
      this.episodes = Array.isArray(response) ? response : [response];
    });
  }
}
