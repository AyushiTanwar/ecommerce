import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public grandTotal:number=0

  constructor(private cart:CartService){}

  ngOnInit():void{
    this.cart.getProduct().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cart.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cart.removeCartItem(item)
  }
  emptyCart(){
    this.cart.removeAllCart()
  }
}
