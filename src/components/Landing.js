import React, {Component} from 'react'

export default class Landing extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Welcome to the landing page!</h1>

                <input type="text" data-username-field/>
                <input type="password" data-password-field/>
            </div>
        )
    }
}
