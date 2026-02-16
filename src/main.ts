import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { LandingComponent } from './app/landing/landing.component'; 

bootstrapApplication(App, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));