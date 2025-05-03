import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plant, PlantDetails } from './models/plant-model';

interface CachedPlants {
  data: Plant[];
  expires: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlantDataService {
  private supabase: SupabaseClient;
  private readonly cacheKey = 'plants';
  private readonly cacheDuration = 15 * 60 * 60 * 1000; // 15 minutes
  constructor(private storage: StorageMap) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
    );
  }

  public getPlantsWithCache$(): Observable<Plant[]> {
    return this.storage.get(this.cacheKey).pipe(
      switchMap((plants) => {
        const cachedResult = plants as CachedPlants;
        if (cachedResult && cachedResult.expires > Date.now())
          return of(cachedResult.data);

        return this.getPlantsAndCache$();
      }),
    );
  }

  public getPlantById$(id: string): Observable<PlantDetails> {
    return new Observable<PlantDetails>((observer) => {
      this.supabase
        .from('plant')
        .select('*, filedata(*)')
        .eq('id', id)
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching plant by ID:', error);
            observer.error(error);
          } else {
            console.log('Plant fetched successfully:', data);
            observer.next(data[0] as PlantDetails);
          }
          observer.complete();
        });
    });
  }

  private getPlantsAndCache$(): Observable<Plant[]> {
    return this.getPlants$().pipe(
      tap((plants) => {
        this.storage
          .set(this.cacheKey, {
            data: plants,
            expires: Date.now() + this.cacheDuration,
          } as CachedPlants)
          .subscribe();
      }),
    );
  }

  private getPlants$(): Observable<Plant[]> {
    return from(
      this.supabase
        .from('plant')
        .select('*')
        .order('pfennigNumber', { ascending: true })
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching plants:', error);
            throw error;
          } else {
            return data as Plant[];
          }
        }),
    );
  }
}
