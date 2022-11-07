import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IEpisode} from "../../../Interfaces/episode.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit, OnDestroy {

  @Input()
  episode: IEpisode;

  @Input()
  url: string;

  subscriptionGet: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit() {
    if (this.url != null)
      this.subscriptionGet = this.service.getEpisodeByUrl(this.url).subscribe(value => this.episode = value)
  }

  ngOnDestroy() {
    if (this.url != null)
      this.subscriptionGet.unsubscribe()
  }

  getDetails(): void {
    this.router.navigate(["episodes/" + this.episode.id]
    )
  }

}
