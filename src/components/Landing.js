import React, {Component} from 'react'
import axios from 'axios'

export default class Landing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            userData: {}
        }
    }

    handleUsernameChange = ({target: {value}}) => {
        this.setState({
            username: value
        })
    }

    handlePasswordChange = ({target: {value}}) => {
        this.setState({
            password: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {username, password} = this.state

        axios
            .post('http://bananaville.biz/login', {
                username,
                password
            })
            .then(response => {
                this.setState({
                    userData: response.data
                })
            })
    }

    render() {
        let {fullName, lastLoggedIn} = this.state.userData

        return (
            <div>
                <h1>Welcome to the landing page!</h1>
                <div data-user-details>
                    Welcome {fullName}, last logged in: {lastLoggedIn}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleUsernameChange} data-username-field/>
                    <input type="password" onChange={this.handlePasswordChange} data-password-field/>

                    <button data-login-submit type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}
