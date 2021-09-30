import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Award } from "../interface/award.interface";

@Injectable({providedIn:'root'})
export class AwardService{

    constructor(private http :HttpClient){}

    post(award :Award){
        return this.http.post('http://localhost:3000/award', award);
    }

    getAll(){
        return this.http.get('http://localhost:3000/award/all');
    }

    getById(id: number){
        return this.http.get('http://localhost:3000/award/'+ id);
    }

    put(award :Award){
        return this.http.put('http://localhost:3000/award', award);
    }

    delete(id: number){
        return this.http.delete('http://localhost:3000/award/'+ id);
    }
}