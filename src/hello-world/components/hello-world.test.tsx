import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { ComponentProps, _Script } from 'unbounce-smart-builder-sdk-types';

import HelloWorld, { DataStructure } from './hello-world';

const ScriptMock: _Script = ({ ...props }) => (
  <script data-testid={props?.externalScript?.scriptId} src={props?.externalScript?.src}>
    {props?.externalScript?.onloadMethod}
  </script>
);

jest.mock('smart-builder-sdk', () => {
  const ogModule = jest.requireActual('smart-builder-sdk');

  return {
    ...ogModule,
    Script: ScriptMock,
  };
});

const setMock = jest.fn();
const props = {
  data: { firstName: 'First Name', lastName: 'Last Name', styles: { textAlign: '' } },
  dispatch: (callback: any) => {
    callback({ get: () => ({ set: setMock }) });
  },
  mode: {
    type: 'view',
  },
} as ComponentProps<DataStructure>;

const renderComponent = () => {
  return render(<HelloWorld {...props} />);
};

describe('Hello World Component', () => {
  test('renders content', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('hello-world-content').textContent).toEqual('Hello, First Name Last Name');
    });
  });

  test('Opens modal', async () => {
    renderComponent();

    fireEvent.click(screen.getByTestId('hello-world-first-name-btn'));

    await waitFor(() => {
      expect(screen.getByTestId('hello-world-first-name-input')).not.toBeNull();
    });
  });

  test('Update firstName', async () => {
    const { queryByTestId } = renderComponent();

    fireEvent.click(screen.getByTestId('hello-world-first-name-btn'));

    await waitFor(() => {
      expect(screen.getByTestId('hello-world-first-name-input')).not.toBeNull();
    });

    fireEvent.change(screen.getByTestId('hello-world-first-name-input'), { target: { value: 'cheeseburger' } });
    fireEvent.click(screen.getByTestId('hello-world-save-btn'));

    await waitFor(() => {
      expect(queryByTestId('hello-world-first-name-input')).toBeNull();

      expect(setMock).toHaveBeenCalledWith('cheeseburger');
    });
  });
});
