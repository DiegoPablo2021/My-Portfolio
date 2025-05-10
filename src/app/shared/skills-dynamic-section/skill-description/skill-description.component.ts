import { Component, inject, Input } from '@angular/core';
import { Skill } from '../skills-section.interface';
import { NgStyle } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-skill-description',
  templateUrl: 'skill-description.component.html',
  imports: [NgStyle]
})
export class SkillDescriptionComponent {
  @Input({required: true }) skill!: Skill;
  svgIcon: SafeHtml | null = null;

  utilsService = inject(UtilsService);

  ngOnChanges(): void {
    if (this.skill?.icon) {
      this.loadSvg(this.skill.icon);
    }
  }

  private loadSvg(path: string): void {
    this.utilsService.loadSvg(path).subscribe((data) => {
      this.svgIcon = data;
    })
  }
}
