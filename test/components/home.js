import Home from '../../app/routes/home';
import React from 'react';
import {createDOM} from '../utils/dom';
import expect from 'expect';
import {mount} from 'enzyme';

describe('Rendering a <Home /> route', function () {
  createDOM();

  it('renders text', function () {
    const wrapper = mount(<Home />);
    expect(wrapper.text()).toContain('React Starter / Underdog.io');
  });
});
