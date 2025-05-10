import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { Project } from './project-card/project.interface';
import { PROJECTS_DATA } from './data/projects.data';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = PROJECTS_DATA;
  }
}
