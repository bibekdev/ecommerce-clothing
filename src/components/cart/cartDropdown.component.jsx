import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/customButton.component";
import CartItem from "../cart-tem/cartIem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-tems">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
