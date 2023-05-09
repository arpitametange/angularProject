import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Top 3 Bollywood Movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast:'Amir Khan', releaseDate:'2009' },
    { title: 'Lagaan', director: 'Ashutosh ', cast: 'Amir Khan', releaseDate: '2000'},
    { title: 'Tanhaji: The Unsang Warrior', director:'Om Raut', cast: 'Ajay', releaseDate: '2020'}
  ]
}
