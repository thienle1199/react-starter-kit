import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const decreaseItem = item => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
});
