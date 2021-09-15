import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouteModule } from './route.module';
import { SetupComponent } from './setups/setup.component';
import { TemplateComponent } from './template/template.component';
import { CategoryListComponent } from './setups/organization-setup/category/category-list/category-list.component';
import { OrganizationSetupComponent } from './setups/organization-setup/organization-setup.component';
import { CategoryComponent } from './setups/organization-setup/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TemplateComponent,
    SetupComponent,
    OrganizationSetupComponent,
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
