import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plant } from './models/plant-model';

@Injectable({
  providedIn: 'root',
})
export class PlantDataService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
    );
  }

  public getPlants$(): Observable<Plant[]> {
    return new Observable<Plant[]>((observer) => {
      this.supabase
        .from('plant')
        .select('*')
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching plants:', error);
            observer.error(error);
          } else {
            console.log('Plants fetched successfully:', data);
            observer.next(data as Plant[]);
          }
          observer.complete();
        });
    });
  }
}
