import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { sharedService } from "src/app/shared/shared.service";
import Swal from "sweetalert2";
import { type } from "../type/type-interface/type.interface";
import { TypeService } from "../type/type-service/type.service";
import { Organization } from "./interface/organization.interface";
import { OrganizationService } from "./service/organization.service";

@Component({
    selector:'app-organization',
    templateUrl:'organization.component.html'
})
export class OrganizationComponent implements OnInit{
    
    name :string = "Organization";
    form :FormGroup;
    action :string;
    orgTypes : type[];
    @ViewChild("closeButton") closeButton: ElementRef

    constructor(private sharedService : sharedService, private organizationService: OrganizationService, private typeService: TypeService){}

    ngOnInit(): void {
        this.typeService.getAllTypes().subscribe(data=> this.orgTypes = data);
        this.sharedService.buttonEventEmitter.subscribe(data => this.action = data);
        
            this.form = new FormGroup({
                orgName: new FormControl('',Validators.required),
                kind: new FormControl(''),
                orgTypeId: new FormControl('',Validators.required),
                moto: new FormControl('',Validators.required),
                mission: new FormControl('',Validators.required),
                rcNumber: new FormControl(''), 
                address: new FormControl('',Validators.required), 
                fundedBy: new FormControl(''),
                affiliation: new FormControl(''),
                logoPath: new FormControl('')
            })

    }

    onSubmit(){
        console.log('action ' + this.action)
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }

    onSave(organization :Organization){
        this.organizationService.post(organization).subscribe(data => {
            data ? this.successfully() : this.failed()
        })
    }


    onUpdate(organization :Organization){this.organizationService.update(organization).subscribe(data=>{
        data ? this.successfully() : this.failed()

    })}


    onDelete(organization :Organization){this.organizationService.delete(organization).subscribe(data=>{
        data ? this.successfully() : this.failed()
    })}



    successfully(){
        Swal.fire({  
            icon: 'success',
            title: `${this.name} ${this.action}d successfully`,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
    }

    failed(){
        Swal.fire({  
            icon: 'error',
            title: `Category failed to ${this.action} `,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
    }

}