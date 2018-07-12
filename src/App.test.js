import React from 'react';
import App from './App';
import {shallow} from 'enzyme'
import {Route} from 'react-router-dom'
import Landing from "./components/Landing";

it('renders without crashing', () => {
    const component = shallow(<App/>)

    expect(component.exists()).toEqual(true)
});

it('renders the landing page component by default', () => {
    const component = shallow(<App/>)

    const defaultRoute = component.find(Route);

    expect(defaultRoute.props().path).toEqual('/')
    expect(defaultRoute.props().component).toEqual(Landing)
})
