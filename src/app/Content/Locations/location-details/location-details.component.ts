import {Component, OnDestroy, OnInit} from '@angular/core';
import {ILocation} from "../../../Interfaces/location.interface";
import {ICharacter} from "../../../Interfaces/character.interface";
import {ActivatedRoute} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {forkJoin, Subscription} from "rxjs";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit,OnDestroy {


  location: ILocation;
  character: ICharacter;
  subscriptionGet: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }


  ngOnDestroy() {
    this.subscriptionGet.unsubscribe()
  }

  ngOnInit(): void {
   this.subscriptionGet = this.activatedRoute.params.subscribe(({id}) => {
      this.service.getLocation(id).subscribe((value) => {
        this.location = value;
        const allChars = [];

        let index = 0;
        for (const charUrl of this.location.residents) {
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

