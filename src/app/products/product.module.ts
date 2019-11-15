import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe],
  imports: [
   
   AppRoutingModule,
    SharedModule
    
  ]
})
export class ProductModule { }
