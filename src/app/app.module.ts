import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './Header/header/header.component';
import {FooterComponent} from './Footer/footer/footer.component';
import {CharactersComponent} from './Content/Characters/characters/characters.component';
import {CharacterComponent} from './Content/Characters/character/character.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { EpisodesComponent } from './Content/Episodes/episodes/episodes.component';
import { EpisodeComponent } from './Content/Episodes/episode/episode.component';
import { EpisodeDetailsComponent } from './Content/Episodes/episode-details/episode-details.component';
import { LocationsComponent } from './Content/Locations/locations/locations.component';
import { LocationComponent } from './Content/Locations/location/location.component';


let routes:Routes = [

  {path:'characters',component:CharactersComponent},
  {path:'episodes',component:EpisodesComponent},
  {path:'episodes/:id',component:EpisodeDetailsComponent},
  {path:'locations',component:LocationsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    CharacterComponent,
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    LocationsComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
