import {PageInfoInterface} from "./pageinfo.interface";
import {IEpisode} from "./episode.interface";

export interface EpisodeResponse{
info: PageInfoInterface;
results:IEpisode[];
}
