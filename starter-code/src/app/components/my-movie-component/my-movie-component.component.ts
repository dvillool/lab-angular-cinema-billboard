import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../services/cinema.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movie = null;

  constructor(private cinemaService: CinemaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.movie = this.cinemaService.getMovie(params.id);

    });
  }
}



