import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name ='Hello bao';
  constructor() { }
	public age =25;
  ngOnInit(): void {
  }

}
