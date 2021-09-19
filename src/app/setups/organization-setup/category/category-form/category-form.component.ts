import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";
import { submitAction } from "src/app/shared/enum/operation.enum";
import { ModalService } from "src/app/shared/modal/modal-service/modal.service";
import Swal from "sweetalert2";
import { category } from "../category-interface/category.interface";
import { CategoryService } from "../category-service/category.service";

@Component({
    selector:'app-category-form',
    templateUrl:'category-form.component.html'
})
export class CategoryFormComponent implements OnInit{
    
    action :string;
    form :FormGroup;
    @ViewChild("closeButton") closeButton: ElementRef

    constructor(private categoryService :CategoryService, private modalService :ModalService){}
    
    ngOnInit(): void {
        this.form = new FormGroup({
            id:   new FormControl(),
            code : new FormControl(),
            title: new FormControl(),
            description: new FormControl()
        })
        this.modalService.buttonEventEmitter.subscribe(action=> this.action = action)
    }

    onSave(category :category){
        this.categoryService.post(category).subscribe(data => {
            if(data){
                this.successfully('saved')
            }else{
                this.failed('save')
            }
        })
    }

   getAll(){this.categoryService.get().subscribe(data =>this.form.setValue(data))}

    onUpdate(category :category){console.log('update action')}

    onDelete(category :category){console.log('delete action')}

    onSubmit(){
        console.log('this.action: ' + this.action + ' ' + submitAction.CREATE);
        if(this.action === submitAction.CREATE){ this.onSave(this.form.value)}
        if(this.action === submitAction.UPDATE){ this.onUpdate(this.form.value)}
        if(this.action === submitAction.DELETE){ this.onDelete(this.form.value)}
    }

    clearForm(){
        this.form.reset();
    }

    successfully(operation_type :string){
        this.getAll();
        this.form.reset();
        Swal.fire({  
            icon: 'success',
            title: 'Category successfully '+ operation_type,
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
            title: 'Category failed to '+ operation_type,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            }); 
    }
}