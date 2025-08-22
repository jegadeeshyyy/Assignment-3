import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'
import {of,delay} from 'rxjs'
import { cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  constructor() {}

  getAll() : Observable<cart[]>{
    return of([{
      id: 1,
      productName: 'medical kit',
      qty: 1,
      price:1000,
      completed: false
    },

    {
      id: 2,
      productName: 'bandage',
      qty: 1,
      price:500,
      completed: true
    },
  ]).pipe(delay(2000))
  }
  
}
