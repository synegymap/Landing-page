import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  async addEarlyBird(data: any) {
    // Insert into 'EarlyBirds' table
    const { error } = await this.supabase
      .from('EarlyBirds')
      .insert([
        {
          ...data,
          converted: false
        }
      ]);

    if (error) throw error;
    return true;
  }
}
