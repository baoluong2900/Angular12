import { getLocaleDateTimeFormat } from '@angular/common';
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
  public RestName() {
    console.log("Hello")
    this.name='';
  }
  public traicay =['Táo','Nho','Cam','Quit','Xoài','Ổi'];
  public dateNow = new Date().toLocaleString();
  public lstraicay =[
    {Name:'Táo', Price:10000, Quantity:10,CreateDate:this.dateNow, Active:true}
    , {Name:'Nho', Price:20000, Quantity:12, CreateDate:this.dateNow, Active:false}
    , {Name:'Cam', Price:30000, Quantity:15,CreateDate:this.dateNow, Active:true}
    , {Name:'Quit', Price:40000, Quantity:-3,CreateDate:this.dateNow, Active:false}
    , {Name:'Xoài', Price:50000, Quantity:11,CreateDate:this.dateNow, Active:true}
  ];
  ngOnInit(): void {
    console.log('traicay = ', this.traicay)
    console.log('lstraicay = ', this.lstraicay)
  }




}
