import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  public totalItem: number = 0;

  constructor(private cart: CartService) {}
  ngOnInit(): void {
    this.cart.getProduct().subscribe((res: any)=> {
      this.totalItem=res.length
    });
  }
}
