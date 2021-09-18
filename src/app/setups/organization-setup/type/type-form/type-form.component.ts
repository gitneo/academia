import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import { type } from "../type-interface/type.interface";
import { TypeService } from "../type-service/type.service";

@Component({
    selector:'app-orgType-form',
    templateUrl:'type-form.component.html'
})
export class TypeFormComponent implements OnInit{
    
    action :string;
    form :FormGroup;

    constructor(private typeService :TypeService, private modalService :ModalService){}
    
    ngOnInit(): void {
        this.form = new FormGroup({
            code : new FormControl(),
            title: new FormControl(),
            description: new FormControl()
        })
        this.modalService.buttonEventEmitter.subscribe(action=> this.action = action)
    }

    onSave(type :type){console.log('create action')}

    getAll(){}

    onUpdate(type :type){console.log('update action')}

    onDelete(type :type){console.log('delete action')}

    onSubmit(){
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value())}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value())}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value())}
    }
}