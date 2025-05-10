import { Component } from '@angular/core';
import { EXPERIENCES } from './data/experiences.data';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

experiences = EXPERIENCES;

}