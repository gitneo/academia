import { Component, OnInit } from "@angular/core";
import { FormControl, FormControlName, FormGroup } from "@angular/forms";

@Component({
    selector:'app-category-form',
    templateUrl:'category-form.component.html'
})
export class CategoryFormComponent implements OnInit{

    categoryForm : FormGroup;

    constructor(){}

    ngOnInit(): void {
        this.categoryForm =  new FormGroup({
            'code': new FormControl(null),
            'title': new FormControl(null),
            'description': new FormControl(null)
        })
    }

    onSubmit(){
        console.log(this.categoryForm);
    }

}