import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  reloadJokeEvent = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  loadJoke() {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }

  reloadJoke() {
    this.reloadJokeEvent.next();
  }
}


export interface Joke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
