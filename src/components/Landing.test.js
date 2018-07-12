import React from "react"
import Landing from "./Landing"
import {shallow} from "enzyme"
import axios from 'axios'

let component

beforeEach(() => {
    component = shallow(<Landing/>)
})

describe('basic component layout and functionality', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should display a welcome message', () => {
        expect(component.find('h1').text()).toEqual('Welcome to the landing page!')
    })
})

describe('login functionality', () => {
    const fakePromise = jest.fn(() => {
        return Promise.resolve({
            data: {
                fullName: 'Alex Hall',
                location: 'Atlanta, GA',
                lastLoggedIn: '01-01-1900'
            }
        })
    });

    it('should provide a username and password input box', () => {
        expect(component.find('[data-username-field]').exists()).toBeTruthy()
        expect(component.find('[data-password-field]').exists()).toBeTruthy()
    })

    beforeEach(() => {
        axios.post = fakePromise
    })

    it('should log the user in when they submit their credentials', () => {
        component.find('[data-username-field]').simulate('change', {target: {value: "alex-hall"}})
        component.find('[data-password-field]').simulate('change', {target: {value: 'SECRET PASSWORD'}})

        component.find('form').simulate('submit', {
            preventDefault: () => {
            }
        })

        expect(fakePromise).toBeCalledWith(
            'http://bananaville.biz/login',
            {
                username: 'alex-hall',
                password: 'SECRET PASSWORD'
            }
        )

        return fakePromise()
            .then(_ => {
                component.update()
                expect(component.find('[data-user-details]').text()).toEqual('Welcome Alex Hall, last logged in: 01-01-1900')
            })
    })
})