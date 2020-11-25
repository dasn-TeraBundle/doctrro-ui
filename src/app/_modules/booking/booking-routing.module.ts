import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent, HomeComponent, SearchComponent} from './_components/';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      // {path: 'book/fid/:fid/did/:did', component: BookingComponent},
      {path: 'book', component: BookingComponent},
      {path: '', component: SearchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {
}
