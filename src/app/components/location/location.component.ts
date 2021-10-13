import { Component, Input, OnInit } from '@angular/core';
import { LocationApiService } from 'src/app/api/api-location.service';
import { LocationRef } from 'src/app/interface/character.model';
import { Location } from 'src/app/interface/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [LocationApiService],
})
export class LocationComponent implements OnInit {
  @Input() title: string;
  @Input() locationRef: LocationRef;
  location: Location;

  constructor(private api: LocationApiService) {}

  ngOnInit(): void {
    const locationNumber = this.locationRef.url.substring(
      this.locationRef.url.lastIndexOf('/') + 1
    );
    if (locationNumber) {
      this.api.getById(parseInt(locationNumber)).then((response) => {
        this.location = response;
      });
    }
  }
}
