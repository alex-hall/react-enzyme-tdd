import React from "react";
import Landing from "./Landing";
import {shallow} from "enzyme";

let component

beforeEach(() => {
    component = shallow(<Landing/>)
})

describe('basic functionality', () => {

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
})