import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [{ path: '', component: TableComponent },
{ path: 'home', component: TableComponent },
{ path: 'detail', component: DetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
