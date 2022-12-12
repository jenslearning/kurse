import { Component } from '@angular/core';
import {ChucknorrisService} from "./chucknorris.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyMoviesList';
  constructor(public chucknorrisService: ChucknorrisService) {}
}
