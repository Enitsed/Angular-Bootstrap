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

  constructor(private httpService: HttpClient) { }

  // 로그인 요청
  getUser() {
    this.httpService.post('http://localhost:8081/auth/login', this.user, { observe: 'response' }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    this.user = new User();
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
