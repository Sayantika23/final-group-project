import React, { Component } from 'react';

import sessionManager from '../commons/session-manager';

import Header from './header';
import Footer from './footer';

import './shoppingCart.css';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: []
        };
    }

    componentDidMount() {
        if (!sessionManager.isLoggedIn()) {
            console.log('User not logged in', 'Redirecting . . .');
            window.location.href = '/login';
        }
    }

    componentWillMount() {
        fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/shoppingCart.api.php?userId=' + sessionManager.getSession().userId)
            .then(res => res.json())
            .then(shoppingCart => {
                this.setState({
                    shoppingCart
                });
            });
    }

    render() {
        const shoppingCart = this.state.shoppingCart.map(cartItem => {
            return (
                <tr key={cartItem.productId}>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.quantity}</td>
                    <td>${cartItem.price}</td>
                    <td>${cartItem.quantity * cartItem.price}</td>
                </tr>
            );
        });

        const totalCost = this.state.shoppingCart.map(cartItem => (cartItem.quantity * cartItem.price))
            .concat([0])
            .reduce((prev, current) => prev + current);

        return (
            <div className="shopping-cart-page">
                <Header />

                <div className="container">
                    <h1>Shopping Cart</h1>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {shoppingCart}

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>${totalCost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Footer />
            </div>
        )
    }
}
