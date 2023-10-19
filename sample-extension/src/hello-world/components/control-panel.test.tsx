import { render, screen, waitFor } from '@testing-library/react';
import { ComponentProps } from '@unbounce/smart-builder-sdk';
import React from 'react';

import { Panel } from './control-panel';
import { DataStructure } from './hello-world';

const setMock = jest.fn();
const closeMock = jest.fn();
const props = {
  data: { fullname: 'First Name', isButtonSet: false, styles: { textAlign: '' }, tracking: { trackingEnabled: true } },
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
} as ComponentProps<DataStructure>;

const renderComponent = () => {
  return render(<Panel closePanel={closeMock} {...props} />);
};

jest.mock('@unbounce/smart-builder-sdk', () => ({
  FullScreenModal: () => <div></div>,
  Toggle: () => <div></div>,
}));

describe('Control Panel Component', () => {
  test('renders content', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('hello-world-conversion-label').textContent).toContain('Conversion Tracking');
    });
  });
});
