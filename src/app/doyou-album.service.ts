import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoyouAlbumService {

  constructor(private httpService: HttpClient) { }

  getPhotos() {
    this.httpService.get('');
  }
}
