import {createReducer,on} from "@ngrx/store";
import { cart } from "./cart.model";
import{loadDataSucess,addCart,updateCart,deleteCart} from "./action";

export interface cartsState{
    carts:cart[];
    error:string;

}

export const initialState:cartsState =
{
    carts:[],
    error:''
}

export const cartReducer = createReducer(
    initialState,
    on(loadDataSucess,(state,{carts})=> ({...state,carts})),

    on(addCart,(state,{cartItems})=> ({...state,carts:[...state.carts,cartItems]})),

    on(updateCart,(State,{cartItem})=>({...State,carts:State.carts.map((x)=>x.id === cartItem.id?cartItem:x)})),

    on(deleteCart,(state,{id})=>({...state,carts:state.carts.filter(y=>y.id != id)}))
)