import Home from '../../app/routes/home';
import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

describe('Rendering a <Home /> route', function () {
  it('renders text', function () {
    const wrapper = shallow(<Home />);
    expect(wrapper.text()).toContain('React Starter / Underdog.io');
  });
});
