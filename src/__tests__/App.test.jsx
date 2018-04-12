import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Holdingpen from '../holdingpen';

const mockStore = configureMockStore();

describe('App', () => {
  it('renders initial state', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('navigates to Holdingpen when /holdingpen', () => {
    const wrapper = mount((
      <Provider store={mockStore()}>
        <MemoryRouter initialEntries={['/holdingpen']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    ));
    expect(wrapper.find(Holdingpen).length).toBe(1);
  });
});
