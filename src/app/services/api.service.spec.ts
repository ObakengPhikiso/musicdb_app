import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { albums } from '../mock/albums_mock';
import { artists } from '../mock/artists_mock';
describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  const ARTISTS_URL = environment.artists;

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
      expect(res.data).toEqual(artists);
      const req = httpMock.expectOne({
        method: 'GET',
        url: ARTISTS_URL
      })
      req.flush(artists)
    })
  });

});
