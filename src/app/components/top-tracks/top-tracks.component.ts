import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {
  @Input() tracks: Track[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
