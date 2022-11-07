import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from "../../../Interfaces/location.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {RickMortyService} from "../../../Services/rick-morty.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  @Input()
  location: ILocation;

  @Input()
  url: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.service.getLocation(this.url).subscribe(value => this.location = value)
  }

  getDetails(): void {
    this.router.navigate(["locations/" + this.location.id]
    )
  }

}
