import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import { TableService } from "src/app/shared/table/simple-table/table.service";
import Swal from "sweetalert2";
import { Award } from "../interface/award.interface";
import { AwardService } from "../service/award.service";

@Component({
    selector:'app-award-form',
    templateUrl: 'award-form.component.html'
})
export class AwardFormComponent implements OnInit{

    action :string;
    form :FormGroup;
    @ViewChild("closeButton") closeButton: ElementRef


    constructor(private awardService :AwardService, private modalService :ModalService,private tableService : TableService){}
    
    ngOnInit(): void {
        this.modalService.buttonEventEmitter.subscribe(data => this.action = data);

        this.form = new FormGroup({
            id:   new FormControl(),
            code : new FormControl('',Validators.required),
            description: new FormControl('',Validators.required),
            createdAt : new FormControl(),
            updatedAt : new FormControl()
        });

        if(this.action !== submitAction.CREATE){
            this.tableService.tableEventEmitter.subscribe(data=>{
                data ? this.form.setValue(data) : this.form.reset()
            });
        }
    }

   onSave(award :Award){
        this.awardService.post(award).subscribe(data => {
            data ? this.successfully() : this.failed();
        })
    }


    onUpdate(award :Award){
        this.awardService.put(award).subscribe(data=>{
        data ? this.successfully() : this.failed()
    })}


    onDelete(award :Award){
        this.awardService.delete(award).subscribe(data=>{
        data ? this.successfully() : this.failed()
    })}


    onSubmit(){
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }


    clearForm(){
        this.form.reset();
    }

    successfully(){
        this.awardService.getAllAwards()
        this.form.reset();
        Swal.fire({  
            icon: 'success',
            title: `type ${this.action}d successfully`,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
        this.closeButton.nativeElement.click();
    }

    failed(){
        Swal.fire({  
            icon: 'error',
            title: `type failed to ${this.action} `,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
    }
}
 