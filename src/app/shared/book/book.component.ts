import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter, Input } from '@angular/core';
import { Book } from './book.model';

@Component( {
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
} )
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor( private bookshelfService: BookshelfService ) { }

  ngOnInit(): void {

    onBookSelected(); {
      // Tell App that someone clicked on a book
      this.bookshelfService.bookSelected.emit( this.book );
    }
  }
}

function onBookSelected() {
  throw new Error( 'Function not implemented.' );
}

