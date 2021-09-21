import { HttpClient, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { type } from "../type-interface/type.interface";

@Injectable({providedIn:'root'})
export class TypeService{
    
    typeEventEmitter  = new Subject<type[]>();
    types: type[];

    constructor(private http: HttpClient){}
    
    post(type : type){
       return this.http.post('http://localhost:3000/type/create', type);
    }

    getAll(){
        this.http.get<type[]>('http://localhost:3000/type/all').subscribe(data => {
            this.types =  data
            this.typeEventEmitter.next(data)
        });
        return this.types;
    }



    update(type :type){
        console.log('testing -- '+type)
        return this.http.put('http://localhost:3000/type/update', type);
    }

    delete(type :type){
        return this.http.delete('http://localhost:3000/type/'+type.id);
    }
}