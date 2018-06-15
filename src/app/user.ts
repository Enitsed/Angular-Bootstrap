export class User {
  private _userSeq: number;
  private _userId: string;
  private _userPw: string;
  private _name: string;
  private _gender: string;
  private _email: string;
  private _birth: string;
  private _address: string;
  private _regSeq: number;
  private _regDt: string;
  private _modSeq: number;
  private _modDt: string;

  constructor() {

  }

  get userSeq(): number {
    return this._userSeq;
  }

  set userSeq(value: number) {
    this._userSeq = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get userPw(): string {
    return this._userPw;
  }

  set userPw(value: string) {
    this._userPw = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get birth(): string {
    return this._birth;
  }

  set birth(value: string) {
    this._birth = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get regSeq(): number {
    return this._regSeq;
  }

  set regSeq(value: number) {
    this._regSeq = value;
  }

  get regDt(): string {
    return this._regDt;
  }

  set regDt(value: string) {
    this._regDt = value;
  }

  get modSeq(): number {
    return this._modSeq;
  }

  set modSeq(value: number) {
    this._modSeq = value;
  }

  get modDt(): string {
    return this._modDt;
  }

  set modDt(value: string) {
    this._modDt = value;
  }
}
