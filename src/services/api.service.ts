import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  public apiURL = 'http://guindostan.org/wp-json/wp/v2/'

  public endpoints = {
    activities: `${this.apiURL}activities`,
    media: `${this.apiURL}media`,
/*     cinemas: `${this.apiURL}cinemas`,
    shows: `${this.apiURL}shows`,
    favorites: `${this.apiURL}favorites`,
    auth: `${this.apiURL}auth` */
  }

  public movies = {}

  public getActivities() {
    return this.http.get(this.endpoints.activities);
  }

  public getActivityMedia(id) {
    return this.http.get(
      `${this.endpoints.media}/${id}`
    );
  }

/*   public getCinemas() {
    return this.http.get(this.endpoints.cinemas);
  }

  public getShows() {
    return this.http.get(this.endpoints.shows);
  }

  public getFavorites() {
    return this.http.get(this.endpoints.favorites);
  } */
}