import {Component, Input, OnInit} from '@angular/core';
import {IEpisode} from "../../../Interfaces/episode.interface";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode:IEpisode;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }


  getDetails():void{
    this.router.navigate([this.episode.id],{relativeTo:this.activatedRoute})
  }

}
