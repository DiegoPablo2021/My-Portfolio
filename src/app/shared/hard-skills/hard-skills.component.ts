import { Component, OnInit } from '@angular/core';
import { SkillsDynamicSectionComponent } from "../skills-dynamic-section/skills-dynamic-section.component";
import { SkillSection } from '../skills-dynamic-section/skills-section.interface';
import { HARD_SKILLS_DATA } from '../skills-dynamic-section/data/skills.data';

@Component({
  selector: 'app-hard-skills',
  template: `
    <app-skills-dynamic-section [skillData]="hardSkillsData"></app-skills-dynamic-section>
  `,
  imports: [SkillsDynamicSectionComponent]
})

export class HardSkillsComponent implements OnInit {
  hardSkillsData: SkillSection | null = null;

  constructor() { }

  ngOnInit() {
    this.getHardSkillsData();
  }

  getHardSkillsData() {
    this.hardSkillsData = HARD_SKILLS_DATA;
  }
}
