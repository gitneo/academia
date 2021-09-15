import { Component, Input } from "@angular/core";

@Component({
    selector:'app-category-list',
    templateUrl:'category-list.component.html'
})
export class CategoryListComponent{
    @Input() categoryList :any
}