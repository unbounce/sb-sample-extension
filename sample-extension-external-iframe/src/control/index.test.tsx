import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { mockUIComponents, mockSmartBuilderShared } from '../../../__mocks__';
import { CalendlyControlComponent } from './index';

const mockFunction = jest.fn();
const mockDispatch = jest.fn();

jest.mock('../../../config/global-dependencies/ui-components', () => ({
  ...mockUIComponents,
}));

jest.mock('../../../config/global-dependencies/smart-builder-shared', () => ({
  ...mockSmartBuilderShared,
}));

jest.mock('../ui-event-tracking/index.ts', () => ({
  useUIEvents: jest.fn().mockImplementation(() => ({
    sendEvent: jest.fn(),
  })),
}));

const renderCalendlyControl = (username: string) => {
  return render(
    <CalendlyControlComponent
      closePanel={mockFunction}
      data={{
        username: username,
        height: 0,
        trackConversion: {
          trackingEnabled: false,
        },
      }}
      dispatch={mockDispatch}
      isSelected={true}
      entityId={''}
      mode={{
        type: 'edit',
      }}
    />,
  );
};

describe('Calendly cotrol', () => {
  test('renders conversion tracking and dispatch call', () => {
    renderCalendlyControl('user-test');

    /* conversion displayed, 0 dispatch calls */
    const conversionButton = screen.getByTestId('paypal-conversion-tracking');
    expect(conversionButton).toBeInTheDocument();
    expect(mockDispatch).toBeCalledTimes(0);

    /* conversion clicked, dispatch called 1 time */
    userEvent.click(conversionButton);
    expect(mockDispatch).toBeCalledTimes(1);
  });

  test('renders Apply button and dispatch call', () => {
    renderCalendlyControl('user-test');

    /* Apply button displayed, 1 dispatch call */
    const applyButton = screen.getByText(/Apply/i);
    expect(applyButton).toBeInTheDocument();
    expect(mockDispatch).toBeCalledTimes(1);

    /* Apply button clicked, dispatch called 2 times */
    userEvent.click(applyButton);
    expect(mockDispatch).toBeCalledTimes(2);
  });

  test('renders Apply button as disabled when user is incorrect', () => {
    renderCalendlyControl('');

    /* Apply button has 'disabled' attribute */
    const applyButton = screen.getByText(/Apply/i);
    expect(applyButton).toHaveAttribute('disabled');

    /* Apply button clicked, dispatch calls should still be 2 since button is disabled */
    userEvent.click(applyButton);
    expect(mockDispatch).toBeCalledTimes(2);
  });
});
