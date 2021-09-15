import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { TemplateComponent } from "./template/template.component";

const routes :Routes =[
    {path:'',component:TemplateComponent,children:[
        {path:'dashboard',component:DashboardComponent}
    ]},
    {path:'login',component:LoginComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RouteModule{}