import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ConvertTimePipe } from 'src/app/helpers/convert-time.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { AlbumCardComponent } from 'src/app/components/album-card/album-card.component';
import { TopTracksComponent } from 'src/app/components/top-tracks/top-tracks.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ConvertTimePipe,
    AlbumCardComponent,
    TopTracksComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService]
})
export class ArtistModule { }
