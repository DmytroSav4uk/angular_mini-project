import {Component, OnInit} from '@angular/core';
import {ICharacter} from "../../../Interfaces/character.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {forkJoin} from "rxjs";
import {IEpisode} from "../../../Interfaces/episode.interface";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {


  character: ICharacter;
  episode: IEpisode;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.service.getCharById(id).subscribe((value) => {
        this.character = value;
        const allEpisodes = [];

        let index = 0;
        for (const episodeUrl of this.character.episode) {
          allEpisodes[index] = this.service.getEpisodeByUrl(episodeUrl);
          index += 1;
        }

        forkJoin(allEpisodes).subscribe((results) => {
          console.log(results);
        });
      })
    })
  }
}
