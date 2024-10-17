import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
filter_btn=false;
no_filter_btn=true;

  constructor() { }

  ngOnInit(): void {
  }
  people = [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Alice Smith', age: 28, country: 'Canada' },
    { name: 'Michael Johnson', age: 35, country: 'UK' },
    { name: 'Emily Davis', age: 22, country: 'Australia' },
    { name: 'David Brown', age: 40, country: 'Germany' },
    { name: 'Sophia Wilson', age: 27, country: 'New Zealand' },
    { name: 'James Taylor', age: 33, country: 'USA' },
    { name: 'Olivia Martinez', age: 25, country: 'Mexico' },
    { name: 'William Anderson', age: 31, country: 'France' },
    { name: 'Isabella Thomas', age: 29, country: 'Italy' },
    { name: 'Ethan Jackson', age: 26, country: 'Spain' },
    { name: 'Mia White', age: 24, country: 'Brazil' },
    { name: 'Alexander Harris', age: 32, country: 'Russia' },
    { name: 'Charlotte Clark', age: 21, country: 'Sweden' },
    { name: 'Benjamin Lewis', age: 36, country: 'Netherlands' },
    { name: 'Ava Robinson', age: 23, country: 'Japan' },
    { name: 'Daniel Walker', age: 34, country: 'South Africa' },
    { name: 'Grace Hall', age: 30, country: 'Ireland' },
    { name: 'Lucas Young', age: 27, country: 'India' },
    { name: 'Zoe King', age: 29, country: 'Singapore' },
    { name: 'Henry Wright', age: 38, country: 'Argentina' },
    { name: 'Liam Scott', age: 30, country: 'USA' },
    { name: 'Emma Adams', age: 26, country: 'Canada' },
    { name: 'Noah Baker', age: 32, country: 'UK' },
    { name: 'Ava Nelson', age: 24, country: 'Australia' },
    { name: 'Oliver Carter', age: 29, country: 'Germany' },
    { name: 'Sophia Mitchell', age: 27, country: 'New Zealand' },
    { name: 'Elijah Perez', age: 35, country: 'USA' },
    { name: 'Mia Roberts', age: 22, country: 'Mexico' },
    { name: 'James Turner', age: 31, country: 'France' },
    { name: 'Charlotte Phillips', age: 28, country: 'Italy' },
    { name: 'Amelia Campbell', age: 23, country: 'Spain' },
    { name: 'Lucas Parker', age: 34, country: 'Brazil' },
    { name: 'Harper Evans', age: 21, country: 'Russia' },
    { name: 'Evelyn Edwards', age: 36, country: 'Sweden' },
    { name: 'Jackson Collins', age: 25, country: 'Netherlands' },
    { name: 'Scarlett Stewart', age: 29, country: 'Japan' },
    { name: 'Aiden Sanchez', age: 33, country: 'South Africa' },
    { name: 'Chloe Morris', age: 30, country: 'Ireland' },
    { name: 'Wyatt Reed', age: 27, country: 'India' },
    { name: 'Lily Cook', age: 38, country: 'Singapore' },
    { name: 'Gabriel Morgan', age: 30, country: 'Argentina' }
  ]
temppeople=[...this.people]
  fiter() {
    this.filter_btn=true;
    this.no_filter_btn=false;

this.temppeople=this.people.filter(people=>people.age>30)
  }
  nofilter(){
    this.no_filter_btn=true;
    this.filter_btn=false;
    this.temppeople=this.people;
  }
  name="";
  search(){
    if(this.name!=""){
    this.temppeople=this.people.filter(people=>people.name.toLowerCase() == this.name.toLowerCase())
  }
  else{
    this.temppeople=this.people;
  }
}
}
