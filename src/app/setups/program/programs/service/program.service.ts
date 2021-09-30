import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Program } from "../interface/program.interface";

@Injectable({providedIn:'root'})
export class ProgramService{

    constructor(private http: HttpClient){}

    post(program : Program){
        return this.http.post('http://localhost:3000/program/create', program);
    }

    getAll(){
        return this.http.get('http://localhost:3000/program/all');
    }


    get(id: number){
        return this.http.get('http://localhost:3000/program/'+ id);
    }


    put(program :Program){
        return this.http.put('http://localhost:3000/program', program);
    }


    delete(id:number){
        return this.http.delete('http://localhost:3000/program/' + id);
    }
}