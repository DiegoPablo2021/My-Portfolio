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

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}