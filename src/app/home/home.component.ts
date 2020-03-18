import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Item } from '../models/BookList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public books: Item[];

  public inputBook: String;

  getInputBook(value:string){
    this.bookService.getBooks(value)
    .subscribe(
      book => {
        this.books = book.items;
        console.log(this.books);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
