import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
/*
  앨범 서비스
  TODO : 웹에서 사진을 가져와서 리스트를 보여준다.
 */
export class DoyouAlbumService {

  constructor(private httpService: HttpClient) { }

  // 사진
  getPhotos() {
    this.httpService.get('');
  }
}
