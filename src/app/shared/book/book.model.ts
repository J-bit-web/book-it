// Model is representation of data. \\

export class Book {
  public title: string;
  public author: string;
  public genre: string;
  public coverImagePath: string;

  constructor( title: string, author: string, genre: string,  coverimagePath: string ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.coverImagePath = coverimagePath;

  }
}
