import { Component, Input } from '@angular/core';
import { Skill, SkillSection } from './skills-section.interface';
import { NgClass } from '@angular/common';
import { SkillDescriptionComponent } from "./skill-description/skill-description.component";

@Component({
  selector: 'app-skills-dynamic-section',
  imports: [NgClass, SkillDescriptionComponent],
  templateUrl: './skills-dynamic-section.component.html',
  styleUrl: './skills-dynamic-section.component.css'
})
export class SkillsDynamicSectionComponent {
  @Input() secondaryColor: boolean = false;
  @Input() skillData: SkillSection | null = null;
}
