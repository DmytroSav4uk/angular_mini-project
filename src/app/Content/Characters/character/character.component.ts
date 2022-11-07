import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../../Interfaces/character.interface";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ILocation} from "../../../Interfaces/location.interface";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: ICharacter;

  @Input()
  url: string;

  @Input()
  location: ILocation

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.service.getCharByUrl(this.url).subscribe(value => this.character = value)
  }

  getCharDetails() {
    this.router.navigate(["characters/" + this.character.id],

    )
  }

  getLocationDetails() {
    this.router.navigate(["locations/" + this.character.location.url.match(/\d+$/)]
    )
  }
    getOriginDetails()
    {
      this.router.navigate(["locations/" + this.character.origin.url.match(/\d+$/)]
      )
    }
}
