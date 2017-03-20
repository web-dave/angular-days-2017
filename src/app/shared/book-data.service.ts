import { IBook } from './ibook';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BookDataService {
  constructor(private http: Http) { }

  getBooks():Observable<IBook[]>{
    // return this.books;
    return this.http.get('http://localhost:4730/books')
    .map(response => response.json())
  }

//  books = [
//   {
//     "title": "Design Patterns",
//     "isbn": "978-0-20163-361-0",
//     "author": "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides"
//   },
//   {
//     "title": "REST und HTTP",
//     "isbn": "978-3-86490-120-1",
//     "author": "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf"
//   },
//   {
//     "title": "Eloquent JavaScript",
//     "isbn": " 978-1-59327-584-6",
//     "author": "Marijn Haverbeke"
//   }
// ];
}
