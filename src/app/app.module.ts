import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { LocationComponent } from './components/location/location.component';
import { ApiHttpService } from './api/api-http.service';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterProfileComponent,
    LocationComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
