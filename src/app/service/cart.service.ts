import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
  getProduct(): Observable<any> {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    // product will be passed to cartItemlist
    this.cartItemList.push(...product);
    // this will pass the data where it is subscribe
    // as productList is a observable we can use it as emmet and also we can subscribe to it
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice():number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    // this is to update cart list when we remove an item
    this.productList.next(this.cartItemList)
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
