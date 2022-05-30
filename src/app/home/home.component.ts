import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name ='Hello bao';
  public loginName ='admin';
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
    console.log('lsMeo = ', this.animal)
  }
  public animal = [
  // {city: 'Chọn thành phố', district: []},
  {
    city: 'Mèo',
    district: [
      'Mèo ba tư'
      ,'Mèo lông chân ngắn'
      , 'Mèo ai cập'
      , 'Mèo việt nam'
    ],
  },
  {
    city: 'Chó',
    district: [
      'Chó ba tư'
      ,'Chó lông chân ngắn'
      , 'Chó ai cập'
      , 'Chó việt nam'
    ],
  },
];
public districts: string[]= [];
public changeCity(event: any) {
  const city = event.target.value;
  if(!city) {
    return;
  }
  else {
    console.log('event',city);
  }

  // Cách 1:
  // const search = this.animal.filter((data) => data.city === city);
  // console.log('search',search);
  // if(search && search.length >0) {
  //   this.districts = search[0].district;
  // }

  // Cách 2:
  this.districts = this.animal.find((data) => data.city === city)?.district || [];

}
}
