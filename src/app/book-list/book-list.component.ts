import { BookDataService } from './../shared/book-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() title: string;
  @Output() pong = new EventEmitter<string>();
  books;
 
  constructor(private bookService : BookDataService) { }

  ngOnInit() {
    this.pong.emit('PONG');
this.books = this.bookService.getBooks()
  }

}
