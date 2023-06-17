import { Component } from '@angular/core';

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
}
