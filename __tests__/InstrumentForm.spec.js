import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Instruments from '../src/components/DataView/Instruments';

const mockStore = configureStore([]);

describe('Instruments component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      instrument: {
        instruments: [
          { id: 1, code: '001', pupitre: 'flute', observation: 'Some observation' },
          { id: 2, code: '002', pupitre: 'clarinet', observation: 'Some observation' },
          { id: 3, code: '003', pupitre: 'oboe', observation: 'Some observation' },
        ],
      },
      user: {
        loggedInUser: {
          user: {
            role: 'board',
          },
        },
      },
    });
  });

  test('should render without error', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Instruments />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Instruments')).toBeInTheDocument();
  });
});
