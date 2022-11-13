import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { ArtistCardComponent } from 'src/app/components/artist-card/artist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { NumberFormatterPipe } from 'src/app/helpers/number-formatter.pipe';


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistCardComponent,
    NumberFormatterPipe

  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService]
})
export class ArtistsModule { }
