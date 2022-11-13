import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/interfaces/album';
import { Artist } from 'src/app/interfaces/artist';
import { Track } from 'src/app/interfaces/track';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {
  artist!: Artist;
  artistId!: number;
  top5: Track[] = [];
  albums: Album[] = [];

  constructor(private apiService: ApiService, private curRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.curRouter.params.subscribe((data: any) => {
      this.artistId = data.id
    });
    this.getCurrentArtist();
    this.getTop5Tracks();
    this.getAlbums();
  }

  getCurrentArtist() {
    return this.apiService.getArtistById(this.artistId).subscribe((res: any) => {
      this.artist = res;
    })
  }

  getTop5Tracks() {
    return this.apiService.getTop5(this.artistId).subscribe((res: any) => {
      this.top5.push(...res.data);
    }, (err: any) => err)
  }

  getAlbums() {
    return this.apiService.getAlbums(this.artistId).subscribe((res: any) => {
      this.albums.push(...res.data);
    }, (err: any) => err)
  }

  ngOnDestroy() {
    this.getCurrentArtist().unsubscribe();
    this.getTop5Tracks().unsubscribe();
    this.getAlbums().unsubscribe();
  }
}
