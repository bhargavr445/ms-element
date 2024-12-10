import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrrI } from './Prr-interface';

@Injectable({
  providedIn: 'root'
})
export class PrrService {

  http = inject(HttpClient);

  constructor() { }

  fetchUnivData(): Observable<PrrI> {
    console.log('Fetch Services...');
    return this.http.get<PrrI>('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303');
    
  }
}
