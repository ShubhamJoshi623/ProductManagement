import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from "@angular/router";
import { ProductService } from './product.service';


@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string='product Detail';
  errormessage:'';
  product :IProduct;
  
  constructor(private route:ActivatedRoute,
    private router:Router,
    private productService:ProductService) { }
    

  ngOnInit() {
const param=this.route.snapshot.paramMap.get('id');
if(param)
{
  const id= +param;
  
  this.getProductdesc(id);
  console.log("id : "+id);
}
}
getProductdesc(id:number)
{
  // console.log("product with id : "+x);
  this.productService.getProduct(id).subscribe(
    {
      next:productitem=>this.product=productitem,
      error:err=>this.errormessage=err
    }
  );

}

onBack():void
{
this.router.navigate(['/products']);
}


}
