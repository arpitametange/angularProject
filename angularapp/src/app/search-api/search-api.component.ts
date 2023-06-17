import { Component, OnInit } from '@angular/core';
import { SearchApiService } from './search-api.service';
import {map} from 'rxjs/operators';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-search-api',
  templateUrl: './search-api.component.html',
  styleUrls: ['./search-api.component.css']
})
export class SearchApiComponent implements OnInit {
newArray:any
// searchTerm:any
searchQuery: string;
// searchData: any;

  constructor(private api:SearchApiService) { }

  ngOnInit() {
  this.get()
  this.searchQuery = '';
  }
get(){
  this.api.geturl(this.searchQuery).subscribe((res:any)=>{
    this.newArray=res.query.search
    console.log('data from search api',res);

  })
}
search(){
this.get()
}

}
