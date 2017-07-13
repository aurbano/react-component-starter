import React from 'react';
import { shallow } from 'enzyme';

import Component from '../src/index';

describe('<Component />', () => {
  it('Should render', () => {
    const renderedComponent = shallow(
      <Component />
    );
    expect(renderedComponent.find('div')).toHaveLength(1);
  });
});
