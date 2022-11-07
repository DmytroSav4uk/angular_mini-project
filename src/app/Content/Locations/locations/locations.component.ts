import {Component, OnInit} from '@angular/core';
import {LocationResponse} from "../../../Interfaces/location.apiresponse.interface";
import {RickMortyService} from "../../../Services/rick-morty.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  pages: number[];
  currentPage = 1;
  locations: LocationResponse;

  constructor(private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.getLocations(this.currentPage)
  }

  getLocations(page = 1): void {
    this.service.getAllLocations(page).subscribe(locations => {
      this.locations = locations;
      this.PushToPageArray(locations.info.pages);
      this.currentPage = page;
    });
  }

  PushToPageArray(totalPages: number): void {
    this.pages = [] as number[];

    for (let counter: number = 1; counter <= totalPages; counter++) {
      this.pages.push(counter);
    }
  }
}
