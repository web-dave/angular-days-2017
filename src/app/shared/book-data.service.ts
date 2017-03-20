import { Injectable } from '@angular/core';

@Injectable()
export class BookDataService {
 books = [
  {
    "title": "Design Patterns",
    "isbn": "978-0-20163-361-0",
    "author": "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides"
  },
  {
    "title": "REST und HTTP",
    "isbn": "978-3-86490-120-1",
    "author": "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf"
  },
  {
    "title": "Eloquent JavaScript",
    "isbn": " 978-1-59327-584-6",
    "author": "Marijn Haverbeke"
  }
];
  constructor() { }

  getBooks(){
    return this.books;
  }

}
