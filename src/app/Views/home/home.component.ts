import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/interfaces';
import { movieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  interfaces: Movie[] = [];
  
  constructor(private MovieService: movieService) { }

  ngOnInit(): void {
    this.MovieService.getMovies().subscribe((data: any) => {
      console.log(data.results[0]); // Verifica la estructura de los datos
      this.interfaces = data.results;
    });
  }
}
