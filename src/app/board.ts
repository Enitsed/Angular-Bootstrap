export class Board {
  private _boardSeq: number;
  private _title: string;
  private _contents: string;
  private _authorSeq: number;
  private _date: string;

  constructor(boardSeq: number, title: string, contents: string, authorSeq: number, date: string) {
    this._boardSeq = boardSeq;
    this._title = title;
    this._contents = contents;
    this._authorSeq = authorSeq;
    this._date = date;
  }

  get boardSeq(): number {
    return this._boardSeq;
  }

  set boardSeq(value: number) {
    this._boardSeq = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get contents(): string {
    return this._contents;
  }

  set contents(value: string) {
    this._contents = value;
  }

  get authorSeq(): number {
    return this._authorSeq;
  }

  set authorSeq(value: number) {
    this._authorSeq = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }
}
