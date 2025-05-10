import { Component, inject, Input, OnChanges } from '@angular/core';
import { GetInTouchInfo } from './get-in-touch-info.interface';
import { SafeUrl } from '@angular/platform-browser';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-get-in-touch-button',
  template: `
    <button class="p-3 glass rounded-full hover:scale-110 transition-transform" (click)="openUrl(getInTouch.link)">
      <div [innerHTML]="svgIcon"></div>
    </button>
  `
})

export class GetInTouchButtonComponent implements OnChanges {
  @Input() getInTouch!: GetInTouchInfo;
  svgIcon: SafeUrl | null = null;

  utilsService = inject(UtilsService);

  ngOnChanges(): void {
    if (this.getInTouch.icon) {
      this.loadSvg(this.getInTouch.icon);
    }
  }

  private loadSvg(path: string): void {
    this.utilsService.loadSvg(path).subscribe((data) => {
      this.svgIcon = data;
    })
  }

  openUrl(link: string) {
    window.open(link, "_blank");
  }
}
