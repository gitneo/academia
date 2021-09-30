import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import { TableService } from "src/app/shared/table/simple-table/table.service";
import Swal from "sweetalert2";
import { category } from "../../category/category-interface/category.interface";
import { CategoryService } from "../../category/category-service/category.service";
import { type } from "../type-interface/type.interface";
import { TypeService } from "../type-service/type.service";

@Component({
    selector:'app-orgType-form',
    templateUrl:'type-form.component.html'
})
export class TypeFormComponent implements OnInit{
    
    action :string;
    form :FormGroup;
    categories : category[];
    @ViewChild("closeButton") closeButton: ElementRef


    constructor(private typeService :TypeService, private categoryService :CategoryService,private modalService :ModalService,private tableService : TableService){}
    
    ngOnInit(): void {
        this.modalService.buttonEventEmitter.subscribe(data => this.action = data);
        this.categoryService.getAllCategories().subscribe(data => this.categories = data);

        this.form = new FormGroup({
            id:   new FormControl(),
            code : new FormControl('',Validators.required),
            title: new FormControl('',Validators.required),
            categoryId: new FormControl('',Validators.required),
            description: new FormControl('',Validators.required),
            createdAt : new FormControl(),
            updatedAt : new FormControl()
        });

        console.log(`this ${this.action}`)
        if(this.action !== submitAction.CREATE){
            this.tableService.tableEventEmitter.subscribe(data=>{
                data ? this.form.setValue(data) : this.form.reset()
            });
        }
    }

   onSave(type :type){
        this.typeService.post(type).subscribe(data => {
            data ? this.successfully('saved') : this.failed('save')
        })
    }


    onUpdate(type :type){this.typeService.update(type).subscribe(data=>{
        data ? this.successfully('saved') : this.failed('save')

    })}


    onDelete(type :type){this.typeService.delete(type).subscribe(data=>{
        data ? this.successfully('saved') : this.failed('save')
    })}


    onSubmit(){
        console.log('delteting -- ' + this.action);

        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }

    clearForm(){
        this.form.reset();
    }

    successfully(operation_type :string){
        this.typeService.getAll()
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

    failed(operation_type :string){
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