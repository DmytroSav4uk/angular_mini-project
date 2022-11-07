import {Component, OnDestroy, OnInit} from '@angular/core';
import {IEpisode} from "../../../Interfaces/episode.interface";
import {ActivatedRoute} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {ICharacter} from "../../../Interfaces/character.interface";
import {forkJoin, Subscription} from "rxjs";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit,OnDestroy {

  episode: IEpisode;
  character: ICharacter;
  subscriptionGet: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnDestroy() {
    this.subscriptionGet.unsubscribe();
  }


  ngOnInit(): void {
    this.subscriptionGet = this.activatedRoute.params.subscribe(({id}) => {
      this.service.getEpisode(id).subscribe((value) => {
        this.episode = value;
        const allChars = [];

        let index = 0;
        for (const charUrl of this.episode.characters) {
          allChars[index] = this.service.getCharByUrl(charUrl);
          index += 1;
        }

        forkJoin(allChars).subscribe((results) => {
          console.log(results);
        });
      })
    })
  }
}
