import React, { Component } from 'react'

import Header from './header';
import Footer from './footer';

import './store.css';
import sessionManager from '../commons/session-manager';

export default class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            message: ''
        };

        this.addToCart = this.addToCart.bind(this);
    }
    componentWillMount() {
        if (sessionManager.getSession() && sessionManager.getSession().userId) {
            fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/products.api.php')
                .then(res => res.json())
                .then(products => {
                    this.setState({
                        products
                    });
                });
        } else {
        }
    }

    componentDidMount() {
        if (!sessionManager.isLoggedIn()) {
            console.log('User not logged in', 'Redirecting . . .');
            window.location.href = '/login';
        }
    }

    addToCart(e, product) {
        console.log('Adding product to cart', product);

        fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/addToCart.api.php?productID=' + product.id + '&userId=' + sessionManager.getSession().userId)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    message: 'Successfully added ' + product.name + ' to cart.'
                });
            })
            .catch(e => {
                this.setState({
                    message: 'Could not add ' + product.name + ' to cart.'
                });
            });

    }

    render() {
        const products = this.state.products.map(product => {
            return (
                <div className="card" key={product.id}>
                    <div className="thumbnail">
                        <img src={product.imageUrl} alt="" />
                    </div>
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                    <div className="actions">
                        <button onClick={(e) => this.addToCart(e, product)}>Add to Cart</button>
                    </div>
                </div>
            );
        });

        const message = this.state.message && this.state.message.length ? <div className="message"><p>{this.state.message}</p></div> : null;

        return (
            <div className="store-page">
                <Header />
                <div className="container">
                    {products}

                    {message}
                </div>
                <Footer />
                <div>Icons made by <a href="https://www.flaticon.com/authors/stephen-hutchings" title="Stephen Hutchings">Stephen Hutchings</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        )
    }
}
