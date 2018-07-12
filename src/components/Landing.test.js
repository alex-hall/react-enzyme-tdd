import React from "react";
import Landing from "./Landing";
import {shallow} from "enzyme";


describe('basic functionality', () => {
    let component
    
    beforeEach(() => {
        component = shallow(<Landing/>)
    })

    it('shouldnt explode', () => {
        expect(component.exists()).toEqual(true)
    })

    it('should display a welcome message', () => {
        expect(component.find('h1').text()).toEqual('Welcome to the landing page!')
    })

})