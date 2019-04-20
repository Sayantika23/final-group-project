import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            status: {
                isLoggedIn: false
            }
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(e) {
        e.preventDefault();

        fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/login.api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.username + '&password=' + this.state.password
        })
        .then(res => res.json())
        .then(status => {
            console.log('Received Status from Server', status);
        })
    }

    componentWillMount() {
        fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/login.api.php')
            .then(res => res.json())
            .then(status => {
                if (status.isLoggedIn) {
                    this.setState({
                        status: status
                    });
                }
            });
    }

    renderRedirect() {
        //console.log('Rendering redirect', this.state.status);
        if (this.state.status.isLoggedIn) {
            return <Redirect to="/" />
        }
    }
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <h1>Login</h1>

                <form onSubmit={this.login}>
                    <div style={{position: "relative"}}>
                    <label htmlFor="username">
                        Username
                        <input name="username" type="text" onChange={this.onChange} value={this.state.username} />
                    </label>
                    </div>

                    <div style={{position: "relative"}}>
                    <label htmlFor="username">
                        Password
                        <input name="password" type="password" onChange={this.onChange} value={this.state.password} />
                    </label>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
