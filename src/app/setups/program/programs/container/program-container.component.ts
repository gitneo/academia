import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { sharedService } from "src/app/shared/shared.service";
import Swal from "sweetalert2";
import { Award } from "../../awards/interface/award.interface";
import { AwardService } from "../../awards/service/award.service";
import { ProgramType } from "../../types/interface/program-type.interface";
import { ProgramTypeService } from "../../types/service/program-type.service";
import { Program } from "../interface/program.interface";
import { ProgramService } from "../service/program.service";

@Component({
    selector:'app-program-container',
    templateUrl:'program-container.component.html'
})
export class ProgramContainerComponent{

    name :string = "Organization";
    form :FormGroup;
    action :string;
    awards : Award[];
    programTypes: ProgramType[];
    @ViewChild("closeButton") closeButton: ElementRef

    constructor(private sharedService : sharedService, private programService: ProgramService, private programTypeService: ProgramTypeService,private awardService : AwardService){}

    ngOnInit(): void {
        this.programTypeService.getAll().subscribe(data => this.programTypes = data);
        this.awardService.getAll().subscribe(data => this.awards = data);


        this.sharedService.buttonEventEmitter.subscribe(data => this.action = data);
        
            this.form = new FormGroup({
                title: new FormControl('',Validators.required),
                code: new FormControl('',Validators.required),
                type: new FormControl('',Validators.required),
                description: new FormControl(''),
                duration: new FormControl('',Validators.required),
                durationType: new FormControl(''), 
                award: new FormControl('',Validators.required), 
            })

    }

    onSubmit(){
        console.log('action ' + this.action)
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }

    onSave(program :Program){
        this.programService.post(program).subscribe(data => {
            data ? this.successfully() : this.failed()
        })
    }


    onUpdate(program :Program){
        this.programService.update(program).subscribe(data=>{
        data ? this.successfully() : this.failed()

    })}


    onDelete(program :Program){
        this.programService.delete(program.id).subscribe(data=>{
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