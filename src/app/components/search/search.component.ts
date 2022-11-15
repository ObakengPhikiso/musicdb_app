import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Artist } from 'src/app/interfaces/artist';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  form: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  constructor(private apiService: ApiService) {
    this.search()
  }

  search() {
    this.form.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(res => this.apiService.getArtist(res))
    ).subscribe((data: any) => {
      const artists: Artist[] = data.data;
      this.apiService.setArtists(artists);
    })
  }
  ngOnInit(): void {
  }

}
