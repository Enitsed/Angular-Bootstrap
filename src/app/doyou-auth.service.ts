import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
/*
    로그인 처리를 위한 서비스.
    TODO : 서버와 연결하여 유저정보와 관련한 요청을 보내는 역할

 */
export class DoyouAuthService {
  user: User;

  constructor(httpService: HttpClient) { }

  getUser() {
    this.user = new User(0, 'a','aa','a@naver.com','2018-06-08','서울시');
    this.user.userSeq = 1;
    return this.user;
  }

}
