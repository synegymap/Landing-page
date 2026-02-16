import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  form: FormGroup;
  loading = false;
  success = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private supabase: SupabaseService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      door_number: ['', Validators.required],
      postal_code: ['', Validators.required],
      city: ['', Validators.required],
      rgpd: [false, Validators.requiredTrue]
    });
  }

    scrollToForm() {
    const element = document.getElementById('registerForm');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  async handleSubmit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    try {
      await this.supabase.addEarlyBird(this.form.value);
      this.success = true;
      this.form.reset();
    } catch (error: any) {
      this.errorMessage = error.message;
    } finally {
      this.loading = false;
    }
  }
}
