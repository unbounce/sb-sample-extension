import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

import InstantMessenger, { DataStructure } from './instant-messenger';

const setMock = jest.fn();
const props = {
  data: { whatsappId: '+123456789', telegramId: '+123344332', chatText: 'message us' },
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
} as ComponentProps<DataStructure>;

const renderComponent = () => {
  return render(<InstantMessenger {...props} />);
};

describe('Instan Messenger Component', () => {
  test('renders content', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('button-tex').textContent).toEqual('message us');
    });
  });

  test('Opens modal', async () => {
    renderComponent();

    fireEvent.click(screen.getByTestId('floating-chat-bubble'));

    await waitFor(() => {
      expect(screen.getByTestId('whatsappchat-div')).not.toBeNull();
    });
  });
});
