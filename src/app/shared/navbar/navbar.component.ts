import { Component, HostListener, OnInit } from '@angular/core';
import { DropdownButtonComponent } from "./dropdown-button/dropdown-button.component";
import { NAVBAR_DATA, NavLink } from './data/navbar.data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [DropdownButtonComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navbarData: NavLink[] = [];
  isMobile = false;
  isScrolled = false;

  ngOnInit(): void {
    this.navbarData = NAVBAR_DATA;
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}
