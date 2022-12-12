import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  reloadJokeEvent = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

 
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



// json2ts extension
// 1. URL kopieren ohne Anführungszeichen
// 2. Am Ende der Datei, [strg] + [alt] + [x] ausführen



