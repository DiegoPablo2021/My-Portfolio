import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroSectionComponent } from './shared/hero-section/hero-section.component';
import { AboutMeComponent } from './shared/about-me/about-me.component';
import { HardSkillsComponent } from './shared/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './shared/soft-skills/soft-skills.component';
import { ProjectsSectionComponent } from "./shared/projects-section/projects-section.component";
import { GetInTouchComponent } from "./shared/get-in-touch/get-in-touch.component";
import { ExperiencesComponent } from "./shared/experiences/experiences.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BadgesComponent } from "./shared/badges/badges.component";
import { TestimonialsComponent } from "./shared/testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutMeComponent,
    BadgesComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProjectsSectionComponent,
    GetInTouchComponent,
    ExperiencesComponent,
    FooterComponent,
    TestimonialsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
