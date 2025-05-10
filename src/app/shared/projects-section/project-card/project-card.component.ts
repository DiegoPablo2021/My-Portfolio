import { Component, Input } from '@angular/core';
import { Project } from './project.interface';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [SlicePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  isHovered: boolean = false;

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }
}
