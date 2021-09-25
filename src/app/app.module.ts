import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouteModule } from './route.module';
import { SetupComponent } from './setups/setup.component';
import { TemplateComponent } from './template/template.component';
import { OrganizationSetupComponent } from './setups/organization-setup/organization-setup.component';
import { CategoryComponent } from './setups/organization-setup/category/category.component';
import { CategoryFormComponent } from './setups/organization-setup/category/category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalButtonComponent } from './shared/modal/modal-button/modal-button.component';
import { TableComponent } from './shared/table/table.component';
import { ModalComponent } from './shared/modal/modal.component';
import { OrganizationTypeComponent } from './setups/organization-setup/type/organization-type.component';
import { TypeFormComponent } from './setups/organization-setup/type/type-form/type-form.component';
import { OrganizationComponent } from './setups/organization-setup/organization/organization.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GroupButtonsComponent } from './shared/button/group-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TemplateComponent,
    SetupComponent,
    OrganizationSetupComponent,
    CategoryComponent,
    CategoryFormComponent,
    ModalButtonComponent,
    TableComponent,
    ModalComponent,
    OrganizationTypeComponent,
    TypeFormComponent,
    OrganizationComponent,
    AboutusComponent,
    GroupButtonsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
