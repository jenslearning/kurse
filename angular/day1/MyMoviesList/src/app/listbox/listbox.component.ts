import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "../move-list/move-list.component";
import {ChucknorrisService} from "../chucknorris.service";

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent {
  jokeText = '';

  constructor(private chuckNorrisService: ChucknorrisService) {
  }

  @Input()
  movieList: Movie[] = [];

  @Input()
  updateMovieIndex = -1;

  @Output()
  editMovieClick = new EventEmitter<number>();

  @Output()
  deleteMovieClick = new EventEmitter<number>();

  editMovie(movieIndex: number) {
    this.editMovieClick.emit(movieIndex);
  }

  deleteMovie(movieIndex: number) {
    this.deleteMovieClick.emit(movieIndex);
    /*this.chuckNorrisService.loadJoke().subscribe(joke => {
      this.jokeText = joke.value
    })*/
  }

  movieStyles(movie: Movie, movieIndex: number) {
    return {
      'movie--editing': movieIndex === this.updateMovieIndex,
      'movie--completed': movie.isWatched,
    };
  }
}
