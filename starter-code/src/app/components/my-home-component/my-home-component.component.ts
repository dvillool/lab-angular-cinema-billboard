import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../services/cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  moviesList = null;

  constructor( private cinemaService: CinemaService) { }

  ngOnInit() {
    this.moviesList = this.cinemaService.getMovies();
  }

}
