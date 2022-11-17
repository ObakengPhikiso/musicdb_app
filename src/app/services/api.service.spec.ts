import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { albums } from '../mock/albums_mock';
import { artists, mockArtist1 } from '../mock/artists_mock';
import { Artist } from '../interfaces/artist';
import { Album } from '../interfaces/album';
import { Track } from '../interfaces/track';
import { top5List } from '../mock/top5_mock';
describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const baseUrl = environment.baseUrl;
  const ARTISTS_URL = environment.artists;
  const SEARCH_URL = environment.search;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of artists belonging to a specific user', () => {
    service.getAllArtists().subscribe((res: any) => {
      expect(res.data as Artist[]).toEqual(artists);
      const req = httpMock.expectOne({
        method: 'GET',
        url: ARTISTS_URL
      })
      req.flush(artists)
    })
  });

  it('should get artist by id and return an artist associated with the id', () => {
    const id: number = 892;
    service.getArtistById(id).subscribe((res: any) => {
      expect(res.data as Artist).toEqual(mockArtist1);
      const req = httpMock.expectOne({
        method: 'GET',
        url: ARTISTS_URL
      })
      req.flush(mockArtist1)
    })
  });

  it('should get artist by name and return a list artists related by name', () => {
    const name: string = 'eminem';
    service.getArtist(name).subscribe((res: any) => {
      expect(res.data as Artist[]).toEqual(artists);
      const req = httpMock.expectOne({
        method: 'GET',
        url: SEARCH_URL
      })
      req.flush(artists)
    })
  });

  it('should get list of albums belonging to a given artist', () => {
    const id: number = 892;
    service.getAlbums(id).subscribe((res: any) => {
      expect(res.data as Album[]).toEqual(albums);
      const req = httpMock.expectOne({
        method: 'GET',
        url: `${baseUrl}/artist/${id}/albums`
      })
      req.flush(albums)
    })
  });

  it('should get a top 5 tracks belonging to a specific artist', () => {
    const id: number = 892;
    service.getTop5(id).subscribe((res: any) => {
      expect(res.data as Track[]).toEqual(top5List);
      const req = httpMock.expectOne({
        method: 'GET',
        url: `${baseUrl}/artist/${id}/albums`
      })
      req.flush(top5List)
    })
  });

});
