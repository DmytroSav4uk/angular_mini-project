import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from "../../../Interfaces/location.interface";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  @Input()
  location:ILocation;

  constructor() { }

  ngOnInit(): void {
  }

}
