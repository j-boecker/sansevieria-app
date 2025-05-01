import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plant } from './plant-model';

@Injectable({
  providedIn: 'root',
})
export class PlantDataService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  private mockPlants: Plant[] = [
    {
      id: '1',
      name: 'Rose',
      latinName: 'Rosa',
      imageUrl: 'https://example.com/rose.jpg',
      description: 'A beautiful flower with thorns.',
    },
    {
      id: '2',
      name: 'Tulip',
      latinName: 'Tulipa',
      imageUrl: 'https://example.com/tulip.jpg',
      description: 'A spring-blooming perennial herb.',
    },
  ];
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      process.env['SUPABASE_API_KEY'] || environment.supabaseKey,
    );
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
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
