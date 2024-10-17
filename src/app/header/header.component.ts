import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private rooting:Router) { }

  ngOnInit(): void {
  }
  about_page() {
this.rooting.navigate(['/about'])
    }
}
