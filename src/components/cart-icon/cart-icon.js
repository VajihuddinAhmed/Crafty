import React from 'react';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleHiddenCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleHiddenCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);