import React from "react";
import Landing from "./Landing";
import {shallow} from "enzyme";


describe('basic functionality', () => {
    it('shouldnt explode', () => {
        const component = shallow(<Landing/>)

        expect(component.exists()).toEqual(true)
    })
})