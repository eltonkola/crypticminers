import { Component , OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  linkx = [
   {
     title: 'Chat',
     url : 'chat',
   }
 ];
 ngOnInit() {
 }

 constructor() {
 }
}
