import {Component, Input, OnInit} from '@angular/core';
import {IEpisode} from "../../../Interfaces/episode.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode: IEpisode;

  @Input()
  url: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit() {
    this.service.getEpisodeByUrl(this.url).subscribe(value => this.episode = value)
  }


  getDetails(): void {
    this.router.navigate(["episodes/" + this.episode.id]
    )
  }

}
