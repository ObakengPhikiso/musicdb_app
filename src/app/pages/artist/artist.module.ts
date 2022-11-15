import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ArtistComponent,
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: []
})
export class ArtistModule { }
