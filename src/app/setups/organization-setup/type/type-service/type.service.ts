import { HttpClient, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { type } from "../interfaces/type.interface";

@Injectable({providedIn:'root'})
export class TypeService{
    
    orgTypes :any;

    constructor(private http :HttpClient){}


    get(){
        return this.http.get<type[]>("http://localhost:3000/type/all")
    }
}