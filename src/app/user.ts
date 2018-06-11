export class User {
  userSeq: number;
  userId: string;
  userPw: string;
  name: string;
  gender: string;
  email: string;
  birth: string;
  address: string;
  regSeq: number;
  regDt: string;
  modSeq: number;
  modDt: string;

  constructor() {
    this.userSeq = 0;
    this.userId = 'a';
    this.userPw = 'b';
    this.name = '전도체';
    this.gender = '남';
    this.email = 'a@naver.com';
    this.birth = '2018-06-08';
    this.address = '서울시';
    this.regSeq = 0;
    this.regDt = '2018-06-11';
    this.modSeq = 0;
    this.modDt = '2018-06-11';
  }



}
