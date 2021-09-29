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
import { ProgramSetupComponent } from './setups/program-setup/program-setup.component';
import { ProgramAwardComponent } from './setups/program-setup/program-award/program-award.component';
import { ProgramTypeComponent } from './setups/program-setup/program-type/program-type.component';
import { ProgramComponent } from './setups/program-setup/program/program.component';
 import { SidebarLayoutComponent } from './shared/layouts/sidebar-layout/sidebar-layout.component';
 import { VerticalNavigationComponent } from './shared/navigation/vertical-navigation.component';

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
    GroupButtonsComponent,
    ProgramSetupComponent,
    ProgramAwardComponent,
    ProgramTypeComponent,
    ProgramComponent,
     SidebarLayoutComponent,
    VerticalNavigationComponent
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
