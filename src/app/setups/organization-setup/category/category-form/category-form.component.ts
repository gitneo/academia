import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import { TableService } from "src/app/shared/table/table.service";
import Swal from "sweetalert2";
import { category } from "../category-interface/category.interface";
import { CategoryService } from "../category-service/category.service";

@Component({
    selector:'app-category-form',
    templateUrl:'category-form.component.html',
    styleUrls:['category-form.component.css']
})
export class CategoryFormComponent implements OnInit{
    
    form :FormGroup;
    action :string;
    @ViewChild("closeButton") closeButton: ElementRef

    constructor(private categoryService :CategoryService, private modalService :ModalService, private tableService : TableService){}
    
    ngOnInit(): void {
        this.modalService.buttonEventEmitter.subscribe(data => this.action = data);
        this.form = new FormGroup({
            id:   new FormControl(),
            code : new FormControl('',Validators.required),
            title: new FormControl('',Validators.required),
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


    onSave(category :category){
        this.categoryService.post(category).subscribe(data => {
            data ? this.successfully('saved') : this.failed('save')
        })
    }


    onUpdate(category :category){this.categoryService.update(category).subscribe(data=>{
        data ? this.successfully('saved') : this.failed('save')

    })}


    onDelete(category :category){this.categoryService.delete(category).subscribe(data=>{
        data ? this.successfully('saved') : this.failed('save')
    })}


    onSubmit(){
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }

    clearForm(){
        this.form.reset();
    }

    successfully(operation_type :string){
        this.categoryService.getAll()
        this.form.reset();
        Swal.fire({  
            icon: 'success',
            title: `Category ${this.action}d successfully`,
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
            title: `Category failed to ${this.action} `,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
    }
}