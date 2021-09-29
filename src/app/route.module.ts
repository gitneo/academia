import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./setups/organization-setup/category/category.component";
import { OrganizationSetupComponent } from "./setups/organization-setup/organization-setup.component";
import { OrganizationComponent } from "./setups/organization-setup/organization/organization.component";
import { OrganizationTypeComponent } from "./setups/organization-setup/type/organization-type.component";
import { ProgramAwardComponent } from "./setups/program-setup/program-award/program-award.component";
import { ProgramSetupComponent } from "./setups/program-setup/program-setup.component";
import { ProgramTypeComponent } from "./setups/program-setup/program-type/program-type.component";
import { ProgramComponent } from "./setups/program-setup/program/program.component";
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
        {path:'program-setup',component:ProgramSetupComponent, children:[
            {path:'types',    component:ProgramTypeComponent},
            {path:'awards',   component:ProgramAwardComponent},
            {path:'programs', component:ProgramComponent},
        ]}
    ]},
    {path:'login',component:LoginComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{}