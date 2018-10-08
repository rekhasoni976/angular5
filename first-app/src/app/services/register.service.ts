import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "src/app/TestData/book";
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService{
     
    bks: Observable<Book[]>
    readonly book_URL = 'api/books';
        
    constructor(private http:HttpClient){}

    public getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.book_URL);
      }

 /*      getAllBooks() {
        this.http.get<Book[]>(this.bookUrl).subscribe(
            data=> {this.theallbks=data;}
        );
       
    } */

    
}