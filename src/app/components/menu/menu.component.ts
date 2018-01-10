import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  folders = [
      {
        name: 'Arkivi 1',
        updated: new Date('1/1/16'),
        id : 'data2',
      },
      {
        name: 'Arkivi 2',
        updated: new Date('1/17/16'),
        id : 'data3',
      },
      {
        name: 'Arkivi 3',
        updated: new Date('1/28/16'),
        id : 'data4',
      }
    ];
    notes = [
      {
        name: 'About',
        updated: new Date('2/20/16'),
        link: 'about'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
