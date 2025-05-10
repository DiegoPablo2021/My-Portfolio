import { Component } from '@angular/core';
import { BADGES_DATA } from './data/badges.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badges',
  imports: [CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.css'
})
export class BadgesComponent {
  badges = BADGES_DATA;
}
