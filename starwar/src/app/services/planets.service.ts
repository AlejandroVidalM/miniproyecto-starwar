import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetResponse } from '../model/interface/planets-response.interface';


const authURL = 'https://swapi.co/api/planets/';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
       authURL
    );
 }

}

