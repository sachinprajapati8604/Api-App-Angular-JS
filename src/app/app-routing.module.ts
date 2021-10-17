import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ProductsComponent } from './products/products.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserpostComponent } from './userpost/userpost.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'photos',component:PhotoGalleryComponent},
  {path:'userpost',component:UserpostComponent},
  {path:'products',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
