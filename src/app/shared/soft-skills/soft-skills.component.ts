import { Component, OnInit } from '@angular/core';
import { SkillsDynamicSectionComponent } from "../skills-dynamic-section/skills-dynamic-section.component";
import { SkillSection } from '../skills-dynamic-section/skills-section.interface';
import { SOFT_SKILLS_DATA } from '../skills-dynamic-section/data/skills.data';

@Component({
  selector: 'app-soft-skills',
  template: `
    <app-skills-dynamic-section [skillData]="softSkillsData"></app-skills-dynamic-section>
  `,
  imports: [SkillsDynamicSectionComponent]
})

export class SoftSkillsComponent implements OnInit {
  softSkillsData: SkillSection | null = null;

  ngOnInit() {
    this.getSoftSkillsData();
  }

  getSoftSkillsData() {
    this.softSkillsData = SOFT_SKILLS_DATA;
  }
}
