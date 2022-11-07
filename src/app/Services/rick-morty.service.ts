import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../Configs/URLS";

import {CharResponse} from "../Interfaces/char.apiresponce.interface";
import {EpisodeResponse} from "../Interfaces/episode.apiresponce.interface";
import {IEpisode} from "../Interfaces/episode.interface";
import {LocationResponse} from "../Interfaces/location.apiresponse.interface";

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private httpClient: HttpClient) {
  }


  getAllChars(page = 1): Observable<CharResponse> {
    return this.httpClient.get<CharResponse>(`${urls.characters}/?page=${page}`)
  }

  getCharById(id: string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.characters}/${id}`);
  }


  getAllEpisodes(page = 1): Observable<EpisodeResponse> {
    return this.httpClient.get<EpisodeResponse>(`${urls.episodes}/?page=${page}`)
  }

  getEpisode(id: string): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episodes}/${id}`);
  }

  getAllLocations(page = 1): Observable<LocationResponse> {
    return this.httpClient.get<LocationResponse>(`${urls.locations}/?page=${page}`)
  }
}

