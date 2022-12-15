import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  logo:string="../../../assets/Images/Main.png"
  logo1:string="../../../assets/Images/MedistoreLogo.png"
  bg1:string="../../../assets/Images/Bg1.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
