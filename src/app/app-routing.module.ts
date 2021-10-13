import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character', component: CharacterProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
