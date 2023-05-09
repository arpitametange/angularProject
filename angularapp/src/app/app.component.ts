import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  no=12
  name='arpitaa'
  imgurl='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'
  getname(){
    return this.name
  }
  changeImage(e) 
  {
    this.imgurl = e;
    console.log('catch $event', e);
  }
  func(){
    console.log('this is the function');
    
  }
}

