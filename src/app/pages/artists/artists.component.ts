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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllArtists();
  }

  getAllArtists() {
    return this.apiService.getAllArtists().subscribe((res: any) => {
      this.artists.push(...res.data)
    }, err => err.message)
  }

  ngOnDestroy() {
    this.getAllArtists().unsubscribe();
  }
}
