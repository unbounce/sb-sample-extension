import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';

import { CalendlyViewer, getCalendlyScript } from './calendly-viewer';

const mockFunction = jest.fn();

const renderCalendlyComponent = () => {
  return render(
    <CalendlyViewer
      data={{
        username: '',
        height: 0,
        trackConversion: {
          trackingEnabled: false,
        },
      }}
      dispatch={mockFunction}
      isSelected={false}
      entityId={''}
      mode={{
        type: 'edit',
      }}
    />,
  );
};

describe('Calendly viewer', () => {
  test('display calendly viewer', () => {
    renderCalendlyComponent();
    const component = screen.getByTestId('calendly-script');
    expect(component).toBeInTheDocument();
  });

  test('add calendly script correctly', () => {
    renderCalendlyComponent();
    const script = screen.getByTestId('calendly-script');
    expect(script.innerHTML).toBe(getCalendlyScript('-calendly-calendar', '', false));
  });
});
