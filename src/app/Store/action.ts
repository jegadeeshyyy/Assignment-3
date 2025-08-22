import {createAction,props} from "@ngrx/store";
import { cart } from "./cart.model";



export const loadDataSucess = createAction('load success',props<{carts:cart[]}>());
export const addCart =  createAction("ADD_CART",props<{cartItems:cart}>());

export const updateCart = createAction("UPDATE_CART",props<{cartItem:cart}>());

export const deleteCart = createAction("DELETE_CART",props<{id:number}>());

