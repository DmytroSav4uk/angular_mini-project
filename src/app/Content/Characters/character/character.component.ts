import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ICharacter} from "../../../Interfaces/character.interface";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ILocation} from "../../../Interfaces/location.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  @Input()
  character: ICharacter;

  @Input()
  url: string;

  @Input()
  location: ILocation

  subscriptionGet: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnDestroy() {
    if (this.url != null)
      this.subscriptionGet.unsubscribe()
  }

  ngOnInit(): void {
    if (this.url != null)
      this.subscriptionGet = this.service.getCharByUrl(this.url).subscribe(value => this.character = value)
  }

  getCharDetails() {
    this.router.navigate(["characters/" + this.character.id]
    )
  }

  getLocationDetails() {
    this.router.navigate(["locations/" + this.character.location.url.match(/\d+$/)]
    )
  }

  getOriginDetails() {
    this.router.navigate(["locations/" + this.character.origin.url.match(/\d+$/)]
    )
  }

  getURL() {

  }
}
