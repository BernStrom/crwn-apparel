import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutPage.styled';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 03/23 - CWV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
