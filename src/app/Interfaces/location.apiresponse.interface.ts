import {PageInfoInterface} from "./pageinfo.interface";
import {ILocation} from "./location.interface";


export interface LocationResponse{
  info: PageInfoInterface;
  results:ILocation[];
}
