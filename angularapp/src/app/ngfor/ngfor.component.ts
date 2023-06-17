import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserService } from '../service/user.service';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.GetUsers().subscribe((res => {
    //   console.log('user res', res)
    // }), (error: any) => {
    //   console.log('error occured', error)
    // }),
    // () => console.log('completed')

//without all method 
    // this.userService.GetUsers().subscribe(res => {
    //   console.log('getting data from NgFor comp', res)
    // })


// Observable custom
const obs = new Observable((observer) => {
  console.log('***************My observable start************');
  observer.next('1') // Data stream 
  observer.next('2')
  observer.error('this si the error')
  observer.next('4')
  observer.next('5')

})

// all observer method
obs.subscribe(
    val => { console.log(val)}, // next
    error => { console.log('error')},// error
    () => { console.log('Completed')}
  )

  //or
//this is also work
  // obs.subscribe(val => {
  //   console.log(val)
  // })


  }
  title: string = 'Top 3 Bollywood Movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast:'Amir Khan', releaseDate:'2009' },
    { title: 'Lagaan', director: 'Ashutosh ', cast: 'Amir Khan', releaseDate: '2000'},
    { title: 'Tanhaji: The Unsang Warrior', director:'Om Raut', cast: 'Ajay', releaseDate: '2020'}
  ]

}
