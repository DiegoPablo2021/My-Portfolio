import { Component, OnInit } from '@angular/core';
import { GET_IN_TOUCH_DATA } from './data/get-in-touch.data';
import { GetInTouchInfo } from './get-in-touch-button/get-in-touch-info.interface';
import { GetInTouchButtonComponent } from './get-in-touch-button/get-in-touch-button.component';

@Component({
  selector: 'app-get-in-touch',
  imports: [GetInTouchButtonComponent],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css'
})
export class GetInTouchComponent implements OnInit {
  getInTouchData: GetInTouchInfo[] = [];
  
  ngOnInit(): void {
    this.getInTouchData = GET_IN_TOUCH_DATA;
  }

}
