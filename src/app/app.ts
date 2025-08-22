import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './Store/cart';
import { cart } from './Store/cart.model';
import { Store } from '@ngrx/store';
import { AppState } from './Store/store';
import {addCart,deleteCart,loadDataSucess,updateCart } from './Store/action';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  carts:cart[] = []

  pName:string =''
  Price:number = 0;
  qty:number=0;
  cardId:number=0

  constructor(private hservice:Cart,private store:Store<AppState>)
  {
    this.getAllCarts();

  }

  getAllCarts()
  {
    this.hservice.getAll().subscribe(res =>{
      console.log("carts list",res)

      let carts:cart[] = res;

      this.store.dispatch(loadDataSucess({carts}))
    })
  }

  loadCarts()
  {
    this.store.select('carts').subscribe(carts => this.carts = carts.carts);
      console.log("this.carts",this.carts)
  
  }

  addCarts()
  {
    let cartItems:cart = 
    {
      id: Math.floor(Math.random() * 100) + 1,
      productName:this.pName,
      qty: this.qty,
      price: this.Price,
      completed: false
    }

    this.store.dispatch(addCart({cartItems}));

    this.store.select('carts').subscribe(carts => this.carts = carts.carts);
  }

  updateCart(item:cart)
  {
    console.log("update item",item);
    this.pName = item.productName;
    this.Price = item.price;
    this.qty = item.qty;
    this.cardId = item.id;
  }

  onUpdateCarts()
  {
    let cartItem:cart =
    {
      id: this.cardId,
      productName:this.pName,
      qty: this.qty,
      price: this.Price,
      completed: false
    }

    this.store.dispatch(updateCart({cartItem}))
  }

  onDelete(item:cart)
  {
    let id = item.id;
    this.store.dispatch(deleteCart({id}))
  }


  ngOnInit(): void{
    console.log("test")

    this.loadCarts();

  }
}
