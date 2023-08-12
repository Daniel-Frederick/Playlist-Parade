import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/user_profile/',
//   params: {
//     id: 'nocopyrightsounds',
//     playlistLimit: '15',
//     artistLimit: '10'
//   },
//   headers: {
//     'X-RapidAPI-Key': '06e79c5f01msh5a2b2aae3e6477ap144ae3jsnd7b4d9848667',
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//   }
// };

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  // addProfile(profile: Profile): Observable<Profile> {
  //   return this.http.put(options.url, profile, options.headers);
  // }
}
