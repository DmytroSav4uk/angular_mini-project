import {Component, OnInit} from '@angular/core';
import {RickMortyService} from "../../../Services/rick-morty.service";
import {CharResponse} from "../../../Interfaces/char.apiresponce.interface";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  pages: number[];
  currentPage = 1;
  characters: CharResponse;

  constructor(private service: RickMortyService) {
  }

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page =1): void {
    this.service.getAllChars(page).subscribe(characters => {
      this.characters = characters;
      this.PushToPageArray(characters.info.pages);
      this.currentPage = page;
    });
  }

  PushToPageArray(totalPages: number): void {
    this.pages = [] as number[];

    for(let counter:number = 1; counter<=totalPages; counter++) {
      this.pages.push(counter);
    }
  }

//   pageIncrease() { }
// pageDecrease() { }

}
