import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./setups/organization-setup/category/category.component";
import { OrganizationSetupComponent } from "./setups/organization-setup/organization-setup.component";
import { OrganizationComponent } from "./setups/organization-setup/organization/organization.component";
import { OrganizationTypeComponent } from "./setups/organization-setup/type/organization-type.component";
import { ProgramAwardModalTableContainerComponent } from "./setups/program/awards/container/program-award-modal-table-container.component";
import { ProgramSetupContainerComponent } from "./setups/program/program-setup-container/program-setup-container.component";
import { ProgramTypeModalTableContainerComponent } from "./setups/program/types/program-type-modal-table-container/program-type-modal-table-container.component";
import { SetupComponent } from "./setups/setup.component";
import { TemplateComponent } from "./template/template.component";

const routes :Routes =[
    {path:'app',component:TemplateComponent,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'setups',   component:SetupComponent},
        {path:'AboutUs',   component:AboutusComponent},
        {path:'organization-setup',component:OrganizationSetupComponent,children:[
            {path:'categories', component:CategoryComponent},
            {path:'types',      component:OrganizationTypeComponent},
            {path:'organization', component:OrganizationComponent},
        ]},
        {path:'program-setup', component:ProgramSetupContainerComponent,children:[
            {path:'types',   component:ProgramTypeModalTableContainerComponent},
            {path:'awards',   component:ProgramAwardModalTableContainerComponent}
        ]}
    ]},
    {path:'login',component:LoginComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{}