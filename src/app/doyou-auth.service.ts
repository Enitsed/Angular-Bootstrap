import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class DoyouAuthService {
  user: User;

  constructor(httpService: HttpClient) { }

  getUser() {
    this.user = new User(0, 'a','aa','a@naver.com','2018-06-08','서울시');
    this.user.userSeq = 1;
    return this.user;
  }

}
