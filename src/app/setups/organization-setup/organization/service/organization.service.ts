import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Organization } from "../interface/organization.interface";

@Injectable({providedIn:'root'})
export class OrganizationService{
    
    organizationEventEmitter  = new EventEmitter<Organization[]>();
    organization: Organization[];

    constructor(private http: HttpClient){}
    
    post(organization : Organization){
       return this.http.post('http://localhost:3000/institution/create', organization);
    }

    getAll(){
        console.log("HERRERE2E");
        this.http.get<Organization[]>('http://localhost:3000/institution/all').subscribe(data => {
            this.organization =  data
            this.organizationEventEmitter.emit(data)
        });
        return this.organization;
    }

    getAllCategories(){
        return this.http.get<Organization[]>('http://localhost:3000/institution/all');
    }

    update(organization :Organization){
        return this.http.put('http://localhost:3000/institution/update', organization);
    }

    delete(organization :Organization){
        return this.http.delete('http://localhost:3000/institution/'+organization.id);
    }
}