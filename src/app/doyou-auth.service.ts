import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
/*
    로그인 처리를 위한 서비스.
    TODO : 서버와 연결하여 유저정보와 관련한 요청을 보내는 역할
 */
export class DoyouAuthService {
  user: User;
  isLogged = false;

  constructor(private httpService: HttpClient) {
    this.user = new User();
  }

  // 로그인 요청
  getUser() {
    const body = new HttpParams().set('userId', this.user.userId).set('userPw', this.user.userPw);
    this.httpService.post('http://localhost:8081/auth/login', body, { observe: 'response' }).subscribe(response => {
      console.log(JSON.stringify(response));

    }, error => {
      alert('서버 접속 실패');
      console.log(error);
    });

    // 서버로부터 가져온 유저의 시퀀스 값이 있으면 로그인 처리
    if (this.user.userSeq > 0) {
      this.isLogged = true;
    }
    return this.user;
  }

  // 회원가입 요청
  joinUser() {
    // SPA의 이점을 살리기위해서 폼 전송을 사용하지 않고 폼에서 값만 가져와서
    // HTTP 요청을 해야한다.
    // JSON.stringify(this.user); 이렇게 보낼 수도 있다
    const body = new HttpParams().set('userId', this.user.userId)
      .set('userPw', this.user.userPw)
      .set('name', this.user.name)
      .set('gender', this.user.gender)
      .set('email', this.user.email)
      .set('address', this.user.address);
    this.httpService.post('http://localhost:8081/join/userJoin', body, { observe: 'response' }).subscribe(response => {
      console.log(response);
      if (response.status === 200) {
        console.log(response);
      } else {
        console.log('회원가입 오류');
      }
    }, error => {
      console.log('서버 요청 오류:' + error);
    });
  }


}
