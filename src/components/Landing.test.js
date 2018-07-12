import React from "react";
import Landing from "./Landing";
import {shallow} from "enzyme";


describe('basic functionality', () => {
    it('shouldnt explode', () => {
        const component = shallow(<Landing/>)

        expect(component.exists()).toEqual(true)
    })

    it('should display a welcome message', () => {
        const component = shallow(<Landing/>)

        expect(component.find('h1').text()).toEqual('Welcome to the landing page!')
    })

})