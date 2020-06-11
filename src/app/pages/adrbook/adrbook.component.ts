import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adrbook',
  templateUrl: './adrbook.component.html',
  styleUrls: ['./adrbook.component.css']
})
export class AdrbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listofadrbooks:string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}
