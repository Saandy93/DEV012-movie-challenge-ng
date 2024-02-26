import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class movieService {
  private apiKey = 'a3e2a6c6d9c7573412d787f64b185311'; // Reemplaza con tu clave de API de The Movie Database
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient) {}
  
  getMovies(): Observable <Movie[]> {  //reemplazar tipo any
    return this.http.get<Movie[]>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}`);
   }

}
