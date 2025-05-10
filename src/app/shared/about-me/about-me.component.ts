import { Component, OnInit } from '@angular/core';
import { AboutData } from './data/about.data';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {

  aboutData: string[] = [];

  ngOnInit(): void {
    this.aboutData = AboutData;
  }

}
