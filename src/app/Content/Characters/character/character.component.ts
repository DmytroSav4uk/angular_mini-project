import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../../Interfaces/character.interface";



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: ICharacter;

  constructor() { }
  ngOnInit(): void {
  }

}
