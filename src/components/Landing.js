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

    handleFieldChange = (element, {target: {value}}) => {
        this.setState({
            [element]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {username, password} = this.state

        const {data} = await axios
            .post('http://bananaville.biz/login', {
                username,
                password
            })

        this.setState({
            userData: data
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
                    <input type="text"
                           onChange={(event) => this.handleFieldChange('username', event)}
                           data-username-field/>
                    <input type="password"
                           onChange={(event) => this.handleFieldChange('password', event)}
                           data-password-field/>

                    <button data-login-submit type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}
