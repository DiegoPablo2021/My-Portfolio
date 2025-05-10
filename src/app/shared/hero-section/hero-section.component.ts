import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeroData, HeroInfo } from './data/hero.data';
import { TypewriterService } from '../services/typewriter.service';
import { Subject, Observable } from "rxjs";
import { takeUntil, map } from "rxjs/operators";

@Component({
  selector: 'app-hero-section',
  imports: [AsyncPipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  heroInfo: HeroInfo | null = null;
  typeWriterService = inject(TypewriterService);
  typedText$!: Observable<string>;
  destroy$ = new Subject<void>();
  roles: string[] = [
    "Data Analyst",
    "Data Engineer",
    "Cloud Data Associate",
    "SQL DBA",
    "Power BI Dev"
  ]

  ngOnInit(): void {
    this.heroInfo = HeroData;
    this.typedText$ = this.typeWriterService
    .getTypewriterEffect(this.roles)
    .pipe(
      takeUntil(this.destroy$),
      map(text => text)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
