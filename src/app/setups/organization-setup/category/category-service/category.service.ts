import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { category } from "../category-interface/category.interface";

@Injectable({providedIn:'root'})
export class CategoryService{
    
    categoryEventEmitter  = new EventEmitter<category[]>();
    categories: category[];

    constructor(private http: HttpClient){}
    
    post(category : category){
       return this.http.post('http://localhost:3000/category/create', category);
    }

    getAll(){
        this.http.get<category[]>('http://localhost:3000/category/all').subscribe(data => {
            this.categories =  data
            this.categoryEventEmitter.emit(data)
        });
        return this.categories;
    }

    update(category :category){
        return this.http.put('http://localhost:3000/category/update', category);
    }

    delete(category :category){
        return this.http.delete('http://localhost:3000/category/'+category.id);
    }
}