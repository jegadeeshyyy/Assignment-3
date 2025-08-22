import { Action,ActionReducer } from "@ngrx/store";
import { cartsState,cartReducer } from "./reducer";

export interface AppState
{
    carts:cartsState
}

export interface AppStore
{
    carts:ActionReducer<cartsState,Action>
}

export const  appStore:AppStore =
{
    carts:cartReducer
}