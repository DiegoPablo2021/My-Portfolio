import { Component, Input, HostListener } from '@angular/core';
import { Project } from './project.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }
  
  onMouseLeave() {
    this.isHovered = false;
  }
}