import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './nav/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PageViewComponent } from './views/page-view/page-view.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { InventarioComponent } from './views/inventario/inventario.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'catalogo',
        component: CatalogComponent,
        data: { title: 'Catálogo' },
      },
      {
        path: 'inventario',
        component: InventarioComponent,
        data: { title: 'Inventario' },
      },
      {
        path: 'historico-inventario',
        component: PageViewComponent,
        data: { title: 'Histórico de inventario' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
