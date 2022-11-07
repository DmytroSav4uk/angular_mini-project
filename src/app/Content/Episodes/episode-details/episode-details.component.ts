import {Component, OnInit} from '@angular/core';
import {IEpisode} from "../../../Interfaces/episode.interface";
import {ActivatedRoute} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {ICharacter} from "../../../Interfaces/character.interface";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  episode: IEpisode;
  character: ICharacter;


  constructor(private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.service.getEpisode(id).subscribe((value) => this.episode = value)
      console.log(this.episode)

    })

  }
}
