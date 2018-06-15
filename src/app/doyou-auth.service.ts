import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  constructor(private httpService: HttpClient) { }

  // 로그인 요청
  getUser(loggedUser) {
    const body = new HttpParams().set('userId', loggedUser.userId).set('userPw', loggedUser.userPw);

    this.httpService.post('http://localhost:8081/auth/login', body, { observe: 'response' }).subscribe(response => {
//      if (loggedUser.id != response.)
      console.log(response);
    }, error => {
      console.log(error);
    });
    return this.user;
  }

  // 회원가입 요청
  joinUser(){
    this.httpService.post('http://localhost:8081', this.user, { observe: 'response' }).subscribe(response => {
      // console.log(response);
      if(response.status == 200){
        // console.log(response);
      } else {
        // console.log("회원가입 오류");
      }
    }, error => {
      console.log("서버 요청 오류");
    });
  }


}
