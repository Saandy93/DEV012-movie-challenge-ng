import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { DetailViewComponent } from './Views/detail-view/detail-view.component';


const routes: Routes = [
  { path: 'home', 
  component: HomeComponent
},

{ path: 'detailView', 
  component: DetailViewComponent},  // ... otras rutas
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
