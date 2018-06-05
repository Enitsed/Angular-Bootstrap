export class Photo {
  private _url: string;
  private _name: string;
  private _date: string;
  private _description: string;

  constructor(url: string, name: string, date: string, description: string) {
    this._url = url;
    this._name = name;
    this._date = date;
    this._description = description;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
