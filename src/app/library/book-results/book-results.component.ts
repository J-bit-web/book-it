import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {

 allBooks: Book[] = [
    new Book(
        'Book of Testing',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    // . . . I changed the variable to allBooks cause it is more descriptive in this case . . . //
];






  constructor() { }

  ngOnInit(): void {
  }

}
