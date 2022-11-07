import {ICharacter} from "./character.interface";
import {PageInfoInterface} from "./pageinfo.interface";

export class CharResponse {
  info: PageInfoInterface;
  results: ICharacter[];
}
