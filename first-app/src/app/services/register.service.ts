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
     
    bks: Observable<any[]>
    readonly book_URL = 'http://localhost/angular5/first/test.php';
        
    constructor(private http:HttpClient){}

    public getBooks(): Observable<Book[]>{
        let data = this.http.get<any[]>(this.book_URL);
        return data;
      }

 /*      getAllBooks() {
        this.http.get<Book[]>(this.bookUrl).subscribe(
            data=> {this.theallbks=data;}
        );
       
    } */

    
}