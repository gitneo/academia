import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { CategoryListComponent } from "./setups/organization-setup/category/category-list/category-list.component";
import { CategoryComponent } from "./setups/organization-setup/category/category.component";
import { OrganizationSetupComponent } from "./setups/organization-setup/organization-setup.component";
import { SetupComponent } from "./setups/setup.component";
import { TemplateComponent } from "./template/template.component";

const routes :Routes =[
    {path:'app',component:TemplateComponent,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'setups',component:SetupComponent},
        {path:'organization-setup',component:OrganizationSetupComponent,children:[
            {path:'categories', component:CategoryComponent}
        ]}
    ]},
    {path:'login',component:LoginComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{}