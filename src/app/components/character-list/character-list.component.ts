import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CharacterApiService } from 'src/app/api/api-character.service';
import { Character, PagingInfo } from 'src/app/interface/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  providers: [CharacterApiService],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  pagingInfo: PagingInfo;
  pagedList: Character[];
  length: any;

  constructor(private api: CharacterApiService, private router: Router) {}

  ngOnInit(): void {
    this.getCharacters(0);
  }

  openProfile(id: number) {
    this.router.navigate(['/character'], { queryParams: { id } });
  }

  getStatusIcon(status: string) {
    switch (status.toLowerCase()) {
      case 'alive':
        return '#55cc44';
      case 'dead':
        return '#d63d2e';
      default:
        return 'gray';
    }
  }

  getGender(gender: string) {
    switch (gender.toLowerCase()) {
      case 'male':
        return 'male';
      case 'female':
        return 'female';
      default:
        return '';
    }
  }

  onPageChange(event: PageEvent) {
    this.getCharacters(event.pageIndex + 1);
    this.onPaginateChange();
  }

  getCharacters(pageIndex: number) {
    this.api.getByPage(pageIndex).then((response) => {
      this.pagingInfo = response.info;
      this.characters = response.results;
    });
  }

  onPaginateChange() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}

interface Pagination {
  previousPageIndex: number;
  pageIndex: number;
  pageSize: number;
  length: number;
}
