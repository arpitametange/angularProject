import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }



countries = [
  { name: 'India', value: 'IN', cities: ['Mumbai', 'Delhi'] },
  { name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] }
];

cities: string[] = [];
selectedCountry: string;
selectedCity: string;

populateCities() {
  // Find the selected country
  const selectedCountryObj = this.countries.find(country => country.value === this.selectedCountry);

  // Update cities based on the selected country
  this.cities = selectedCountryObj ? selectedCountryObj.cities : [];
  this.selectedCity = ''; // Reset the selected city
}

  ngOnInit() {
  }

}
