import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial.interface';
import { Testimonials } from './data/testimonials.data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [DatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Array<Testimonial> = [];

  ngOnInit(): void {
    this.testimonials = Testimonials;
  }

}
