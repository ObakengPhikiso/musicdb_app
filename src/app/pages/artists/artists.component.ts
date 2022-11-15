import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[] = [];

  // Add boolean for searching
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllArtists();
    this.searchArtist();
  }

  getAllArtists() {
    return this.apiService.getAllArtists().subscribe((res: any) => {
      const artists: Artist[] = res.data;
      artists.sort((a, b) => b.nb_fan - a.nb_fan)
      this.artists = [];
      this.artists.push(...artists)
    }, (err) => err)
  }

  searchArtist() {
    this.apiService.artists.subscribe((res: Artist[]) => {
      if (res === undefined) {
        this.getAllArtists()
      } else {
        res.sort((a, b) => b.nb_fan - a.nb_fan)
        this.artists = [];
        this.artists.push(...res)
      }

    }, (err) => err)
  }

  ngOnDestroy() {
    this.getAllArtists().unsubscribe();
  }
}
