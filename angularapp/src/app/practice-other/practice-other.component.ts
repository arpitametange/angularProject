import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-other',
  templateUrl: './practice-other.component.html',
  styleUrls: ['./practice-other.component.css']
})
export class PracticeOtherComponent implements OnInit {

  
  
  
    countries: string[] = ['India', 'Pakistan'];
  
    selectedCountry: string;
  
    stateSelections: { [country: string]: string[] } = {
      India: ['Maharastra', 'Goa', 'Kerala'],
      Pakistan: ['karachi', 'lahor', 'baluchistan'],
    };
  
    selectedState: string;
  
    onCountryChange(country: string): void {
      this.selectedCountry = country;
      this.selectedState = '';
    }
  
    getStates(country: string): string[] {
      return this.stateSelections[country] || [];
    }
  
    onStateChange(state: string): void {
      this.selectedState = state;
    }
  
  
    constructor() { }
  
    ngOnInit() {
    }
  
  
    
  }


