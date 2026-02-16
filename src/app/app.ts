import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingComponent],
  template: `<landing></landing>` // Embed your landing page
})
export class App {}
