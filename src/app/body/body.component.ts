import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
show() {
this.hidden=false
}
hidden=true;

  constructor() { }

  ngOnInit(): void {
  }

}
