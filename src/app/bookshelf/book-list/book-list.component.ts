import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Output() currentSelectedBook = new EventEmitter<Book>();

  myBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Drizzt',
      'R.A Salvatore',
      'Fantasy',
      'https://duckduckgo.com/i/139f8b01.png'
    ),
    new Book(
      'Lord of the Rings',
      'J.R.Tolkien',
      'Fantasy',
      'https://duckduckgo.com/i/ac874939.gif'
    )
];

  constructor() { }

  ngOnInit(): void {
    handleBookSelected( book: Book ); {
      //console.log('Book:', book);
      this.currentSelectedBook.emit( book );
    }
  }


}

