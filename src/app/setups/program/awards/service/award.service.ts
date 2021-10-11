import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Award } from "../interface/award.interface";

@Injectable({providedIn:'root'})
export class AwardService{

    awardSubject =  new Subject<Award[]>();
    award :Award[];

    constructor(private http :HttpClient){}

    post(award :Award){
        return this.http.post('http://localhost:3000/degree/create', award);
    }

    getAll(){
        return this.http.get<Award[]>('http://localhost:3000/degree/all');
    }

    getAllAwards(){
        this.http.get<Award[]>('http://localhost:3000/degree/all').subscribe(data =>{
            this.award = data;
            this.awardSubject.next(data);
        })
        return this.award;
    }

    getById(id: number){
        return this.http.get<Award>('http://localhost:3000/degree/all'+ id);
    }

    put(award :Award){
        return this.http.put('http://localhost:3000/degree/update', award);
    }

    delete(award :Award){
        return this.http.delete('http://localhost:3000/degree/'+ award.id);
    }
}