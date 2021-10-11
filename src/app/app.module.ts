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
import { ModalComponent } from './shared/modal/modal.component';
import { OrganizationTypeComponent } from './setups/organization-setup/type/organization-type.component';
import { TypeFormComponent } from './setups/organization-setup/type/type-form/type-form.component';
import { OrganizationComponent } from './setups/organization-setup/organization/organization.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GroupButtonsComponent } from './shared/button/group-buttons.component';

 import { VerticalNavigationComponent } from './shared/navigation/vertical-navigation.component';

import { TableComponent } from './shared/table/simple-table/table.component';
import { PageHeaderComponent } from './shared/header/page-header/page-header.component';
import { ProgramSetupContainerComponent } from './setups/program/program-setup-container/program-setup-container.component';
import { sidebarLayoutComponent } from './shared/layout/siderbar-layout/sidebar-layout.component';
import { ModalTableComponent } from './shared/table/modal-table/modal-table.component';
import { ProgramTypeModalTableContainerComponent } from './setups/program/types/program-type-modal-table-container/program-type-modal-table-container.component';
import { ProgramTypeFormComponent } from './setups/program/types/form/program-type-form.component';
import { ProgramAwardModalTableContainerComponent } from './setups/program/awards/container/program-award-modal-table-container.component';
import { AwardFormComponent } from './setups/program/awards/form/award-form.component';
import { ProgramContainerComponent } from './setups/program/programs/container/program-container.component';

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
    ModalComponent,
    OrganizationTypeComponent,
    TypeFormComponent,
    OrganizationComponent,
    AboutusComponent,
    GroupButtonsComponent,
    VerticalNavigationComponent,
    TableComponent,
    ModalButtonComponent,
    PageHeaderComponent,
    ProgramSetupContainerComponent,
    sidebarLayoutComponent,
    ModalTableComponent,
    ProgramTypeModalTableContainerComponent,
    ProgramTypeFormComponent,
    ProgramAwardModalTableContainerComponent,
    AwardFormComponent,
    ProgramContainerComponent
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
