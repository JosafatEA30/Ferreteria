import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { MainComponent } from './nav/main/main.component';
import { UppernavComponent } from './nav/uppernav/uppernav.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PageViewComponent } from './views/page-view/page-view.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CatalogComponent } from './views/catalog/catalog.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { traduccionPaginador } from './utils/traduccion-paginador';
import { InventarioComponent } from './views/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    UppernavComponent,
    DashboardComponent,
    PageViewComponent,
    CatalogComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: traduccionPaginador }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
