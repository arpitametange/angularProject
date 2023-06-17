import { Component, OnDestroy, OnInit } from '@angular/core';
import { GiphyService } from './giphy.service';
import { MAT_SORT_HEADER_INTL_PROVIDER_FACTORY } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-giphyapi',
  templateUrl: './giphyapi.component.html',
  styleUrls: ['./giphyapi.component.css']
})
export class GiphyapiComponent implements OnInit {
// subscription:Subscription
searchTerm:string
  constructor(private service:GiphyService) { }

  gifs: any[] = [];
  // searchTerm: string;


  ngOnInit() {
    this.service.getGIF().subscribe((res: any) => {
      this.gifs = res.data.map((gif: any) => gif.images);
    });
  }

  onSearchChange() {
    this.service.searchTerm = this.searchTerm;
    this.service.searchGifs().subscribe((response: any) => {
      this.gifs = response.data.map((gif: any) => gif.images);
    });
  }

}