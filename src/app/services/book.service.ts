import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookList } from '../models/BookList';
import { environment } from 'src/environments/environment';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = environment.apiUrl;

    getBooks(query: string) : Observable<BookList> {
        return this.http
        .get<BookList>(this.UrlServiceV1 + "volumes?maxResults=40&filter=paid-ebooks&q=" + query);
    }

}
