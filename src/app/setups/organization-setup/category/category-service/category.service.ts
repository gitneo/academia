import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { category } from "../category-interface/category.interface";

@Injectable({providedIn:'root'})
export class CategoryService{

    constructor(private http: HttpClient){}

    get(){
        return  this.http.get<category[]>('http://localhost:3000/category/all');
    }
}