import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { Book } from "../TestData/book";
//import {Observable} from 'rxjs/Rx';
import { HttpClient,HttpParams,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';



@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})

export class ChildComponent{
    @Input() message:string;
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();
    private registerService :any;
        
    readonly book_URL = 'api/books';
    theallbks:any[] ;
    
    constructor(registerService: RegisterService, private http: HttpClient){
        this.registerService = registerService;
    }
    ngOnInit(){
        this.getAllBooks();
    }

    getAllBooks() {
        this.registerService.getBooks().subscribe(
            data=> {this.theallbks=data;}
        );
    }

    public onClick():void{
       this.notify.emit(this.message);
    }

    public onSubmit(form:any):void{
       // this.registerService.save(form);
      let test = this.registerService.getBooks();
      console.log(test);
    }

    
/*To check form is valid for not */
    private isValid(register):boolean{
        return register.invalid || 
                (register.control.value.cpassword!=register.control.value.password);
    }

}