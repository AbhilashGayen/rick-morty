import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterApiService } from 'src/app/api/api-character.service';
import { Character } from 'src/app/interface/character.model';
import { Episode } from 'src/app/interface/episode.model';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss'],
  providers: [CharacterApiService],
})
export class CharacterProfileComponent implements OnInit {
  id: number;
  character: Character;
  episodes: Episode[];

  constructor(
    private api: CharacterApiService,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.api.getById(this.id).then((response) => {
      this.character = response;
    });
  }
}
