import { Component, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import { category } from "../category-interface/category.interface";
import { CategoryService } from "../category-service/category.service";

@Component({
    selector:'app-category-form',
    templateUrl:'category-form.component.html'
})
export class CategoryFormComponent implements OnInit{
    
    action :string;
    form :FormGroup;

    constructor(private categoryService :CategoryService, private modalService :ModalService){}
    
    ngOnInit(): void {
        this.form = new FormGroup({
            code : new FormControl(),
            title: new FormControl(),
            description: new FormControl()
        })
        this.modalService.buttonEventEmitter.subscribe(action=> this.action = action)
    }

    onSave(type :category){console.log('create action')}

    getAll(){}

    onUpdate(type :category){console.log('update action')}

    onDelete(type :category){console.log('delete action')}

    onSubmit(){
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value())}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value())}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value())}
    }

    clearForm(){
        this.form.reset();
    }
}