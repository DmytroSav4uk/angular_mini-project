import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ILocation} from "../../../Interfaces/location.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit,OnDestroy {


  @Input()
  location: ILocation;

  @Input()
  url: string;

  subscriptionGet:Subscription;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit(): void {
   this.subscriptionGet = this.service.getLocation(this.url).subscribe(value => this.location = value)
  }

  ngOnDestroy() {
    this.subscriptionGet.unsubscribe();
  }

  getDetails(): void {
    this.router.navigate(["locations/" + this.location.id]
    )
  }

}
