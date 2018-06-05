export class User {
  private _userSeq: number;
  private _id: string;
  private _password: string;
  private _email: string;
  private _birth: string;
  private _address: string;

  constructor(userSeq: number, id: string, password: string, email: string, birth: string, address: string) {
    this._userSeq = userSeq;
    this._id = id;
    this._password = password;
    this._email = email;
    this._birth = birth;
    this._address = address;
  }

  get userSeq(): number {
    return this._userSeq;
  }

  set userSeq(value: number) {
    this._userSeq = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
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
}
