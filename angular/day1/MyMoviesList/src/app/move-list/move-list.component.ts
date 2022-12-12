import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent {
  movieTitle = '';
  movieList: Movie[] = [];
  isEditMode = false;
  updateMovieIndex = -1;
  selectedCategory: string = '';

  constructor(private router: Router) {
  }

  goToAboutMe(){
    this.router.navigate(['about']);
  }

  addMovie() {
    if (!(this.movieTitle === '')) {
      console.log("NEW item");
      const movie: Movie = {
        text: this.movieTitle,
        isWatched: false,
        kategorie: this.selectedCategory
      }
      this.movieList.push(movie);
      this.movieTitle = '';
    } else {
      console.log("no text for new item");
    }
  }

  updateMovie() {
    console.log("UPDATE item nr:  " + this.updateMovieIndex);

    this.movieList[this.updateMovieIndex].text = this.movieTitle;
    this.movieList[this.updateMovieIndex].kategorie = this.selectedCategory;
    this.isEditMode = false;
    this.movieTitle = '';
    this.updateMovieIndex = -1;
  }

  editMovie(indexMovie: number) {
    console.log("EDIT item nr:  " + indexMovie);
    this.isEditMode = true;
    this.movieTitle = this.movieList[indexMovie].text;
    this.selectedCategory = this.movieList[indexMovie].kategorie;
    this.updateMovieIndex = indexMovie;
  }

  deleteMovie(indexMovie: number) {
    console.log("DELETE item nr:  " + indexMovie);
    this.isEditMode = false;
    this.updateMovieIndex = -1;
    this.movieTitle = '';
    this.movieList.splice(indexMovie, 1);
  }

  movieStyles(movie: Movie, movieIndex: number) {
    return {
      'movie--editing': movieIndex === this.updateMovieIndex,
      'movie--completed': movie.isWatched
    }
  }
}

export interface Movie {
  text: string;
  isWatched: boolean;
  kategorie: string
}
