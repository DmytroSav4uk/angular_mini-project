import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../Configs/URLS";

import {CharResponse} from "../Interfaces/char.apiresponce.interface";
import {EpisodeResponse} from "../Interfaces/episode.apiresponce.interface";
import {IEpisode} from "../Interfaces/episode.interface";
import {LocationResponse} from "../Interfaces/location.apiresponse.interface";
import {ICharacter} from "../Interfaces/character.interface";
import {ILocation} from "../Interfaces/location.interface";

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private httpClient: HttpClient) {
  }

  getAllChars(page = 1): Observable<CharResponse> {
    return this.httpClient.get<CharResponse>(`${urls.characters}/?page=${page}`)
  }

  getCharById(id: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.characters}/${id}`);
  }

  getCharByUrl(url: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${url}`);
  }

// -------------------------
  getAllEpisodes(page = 1): Observable<EpisodeResponse> {
    return this.httpClient.get<EpisodeResponse>(`${urls.episodes}/?page=${page}`)
  }

  getEpisode(id: string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`);
  }

  getEpisodeByUrl(url: string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${url}`);
  }

// -------------------------
  getAllLocations(page = 1): Observable<LocationResponse> {
    return this.httpClient.get<LocationResponse>(`${urls.locations}/?page=${page}`)
  }

  getLocation(id: string): Observable<ILocation> {
    return this.httpClient.get<ILocation>(`${urls.locations}/${id}`);
  }

  getLocationByUrl(url: string): Observable<ILocation> {
    return this.httpClient.get<ILocation>(`${url}`);
  }
}
