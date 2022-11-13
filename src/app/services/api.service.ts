import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';
import { Track } from '../interfaces/track';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  private artists = environment.artists;
  private search = environment.search;

  constructor(private http: HttpClient) { }

  // Get all artist belonging to a specific user
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artists)
  }

  // Get an artist by name
  getArtist(name: string): Observable<Artist> {
    return this.http.get<Artist>(this.search, { params: { q: name } });
  }
  // Get an artist by name
  getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.baseUrl}/artist/${id}`);
  }

  // Get top 5 tracks of an artist
  getTop5(id: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.baseUrl}/artist/${id}/top`, { params: { limit: 5 } });
  }

  // Get all albums that belongs to an artist
  getAlbums(id: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/artist/${id}/albums`);
  }
}
