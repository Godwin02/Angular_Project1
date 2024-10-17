import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


text:string="";
mark:any;
hidden=true;
grade: any;
inputs=false;
grade_sty: any;
show() {
this.inputs=true;
this.hidden=false;
if(this.mark > 90){
  this.grade ="A PLUS";
  this.grade_sty="green"
}
else if(this.mark >80){
  this.grade="A GRADE";
  this.grade_sty="yellow"

}
else if(this.mark>50){
  this.grade="B GRADE";
  this.grade_sty="blue"

}
else if(this.mark<50){
  this.grade="Fail";
  this.grade_sty="red"

}

}
reset() {
  this.inputs=false;
  this.hidden=true;
  this.grade="";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
