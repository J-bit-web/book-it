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
  @Output() bookSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

    onBookSelected(); {
      // Tell App that someone clicked on a book
      this.bookSelected.emit();
    }
  }
}

function onBookSelected() {
  throw new Error( 'Function not implemented.' );
}

