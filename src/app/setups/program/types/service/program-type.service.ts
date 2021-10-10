import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProgramType } from "../interface/program-type.interface";

@Injectable({providedIn:'root'})
export class ProgramTypeService{
    
    programTypeSubject =  new Subject<ProgramType[]>();
    programTypes : ProgramType[];


    constructor(private http :HttpClient){}

    post(programType : ProgramType){ 
        return this.http.post<ProgramType>('http://localhost:3000/programType/create',programType)
    }

    getAll(){ 
       this.http.get<ProgramType[]>('http://localhost:3000/programType/all');
    }


    getAllTypes(){
        this.http.get<ProgramType[]>('http://localhost:3000/programType/all').subscribe(data => {
            this.programTypes =  data
            this.programTypeSubject.next(data)
        });
        return this.programTypes;
    }

    getById(id :number){ 
        return this.http.get<ProgramType>('http://localhost:3000/programType/' + id)
    }
    
    put(programType : ProgramType){ 
        return this.http.put('http://localhost:3000/programType/update',programType)
    }

    delete(programType : ProgramType){ 
        return this.http.delete('http://localhost:3000/programType/'+programType.id)
    }


}