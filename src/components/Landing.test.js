import React from "react";
import Landing from "./Landing";
import {shallow} from "enzyme";

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

    it('should provide a username and password input box', () => {
        expect(component.find('[data-username-field]').exists()).toBeTruthy()
        expect(component.find('[data-password-field]').exists()).toBeTruthy()
    })

    it('should log the user in when they submit their credentials', () => {
        component.find('[data-username-field]').simulate('change', {target: {value: "alex-hall"}})
        component.find('[data-password-field]').simulate('change', {target: {value: 'SECRET PASSWORD'}})

        component.find('[data-login-submit]').simulate('click')
        
        expect(component.find('[data-user-details]').text()).toEqual('Welcome Alex Hall, last logged in 01-01-1900')
    })
})