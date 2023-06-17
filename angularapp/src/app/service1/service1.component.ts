import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor(private obje:MyserviceService) { }

  ngOnInit() {
  }
  pront(){
    this.obje.PrintFile()

  }
}
