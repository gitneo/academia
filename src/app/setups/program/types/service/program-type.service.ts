import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProgramType } from "../interface/program-type.interface";

@Injectable({providedIn:'root'})
export class ProgramTypeService{

    constructor(private http :HttpClient){}

    post(programType : ProgramType){ 
        return this.http.post<ProgramType>('http://localhost:3000/programType/',programType)
    }

    getAll(){ 
        return this.http.get<ProgramType[]>('http://localhost:3000/programType/all')
    }

    getById(id :number){ 
        return this.http.get<ProgramType>('http://localhost:3000/programType/' + id)
    }
    
    put(programType : ProgramType){ 
        return this.http.put('http://localhost:3000/programType/',programType)
    }

    delete(id :number){ 
        return this.http.delete('http://localhost:3000/programType/'+id)
    }
}