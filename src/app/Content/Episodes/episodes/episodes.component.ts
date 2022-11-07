import {Component, OnDestroy, OnInit} from '@angular/core';

import {RickMortyService} from "../../../Services/rick-morty.service";
import {EpisodeResponse} from "../../../Interfaces/episode.apiresponce.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit,OnDestroy {


  episodes: EpisodeResponse;
  pages: number[];
  currentPage = 1;
  subscriptionGet:Subscription;


  constructor(private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.getEpisodes(this.currentPage)
  }

  ngOnDestroy() {
    this.subscriptionGet.unsubscribe()
  }


  getEpisodes(page = 1): void {
  this.subscriptionGet = this.service.getAllEpisodes(page).subscribe(episodes => {
      this.episodes = episodes;
      this.PushToPageArray(episodes.info.pages);
      this.currentPage = page;
    })
  }

  PushToPageArray(totalPages: number): void {
    this.pages = [] as number[];

    for (let counter: number = 1; counter <= totalPages; counter++) {
      this.pages.push(counter);
    }
  }

}
