import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  template: `
    <div class="relative inline-block text-left dropdown-wrapper">
      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 focus:outline-none"
        aria-expanded="false"
        aria-haspopup="true"
        (click)="toggleDropdown()"
        aria-label="Toggle dropdown menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </div>
    @if (isOpen) {
    <div class="absolute top-full left-0 right-0 glass md:hidden">
      <div class="py-4 px-6 space-y-4">
        <ng-content></ng-content>
      </div>
    </div>

    }
  `,
})
export class DropdownButtonComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
