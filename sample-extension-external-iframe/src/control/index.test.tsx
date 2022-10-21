import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CalendlyControlComponent } from './index';

const mockFunction = jest.fn();
const mockDispatch = jest.fn();

type mockChildren = {
  children: JSX.Element;
  minimal: string;
};

const ChildComponent = ({ children, ...props }: mockChildren) => <div {...props}>{children}</div>;

jest.mock('../../config/global-dependencies/smart-builder-components', () => ({
  Checkbox: () => <div></div>,
  Label: ChildComponent,
  InputField: () => <div></div>,
  GroupRadioButton: () => <div></div>,
  RadioButton: () => <div></div>,
  TextArea: () => <div></div>,
  FieldValidation: () => <div></div>,
  DatePicker: () => <div></div>,
  DateRangePicker: () => <div></div>,
  Toggle: ChildComponent,
  DeleteButton: () => <div></div>,
  AddButton: () => <div></div>,
  Button: ChildComponent,
  ButtonLink: () => <div></div>,
  Link: () => <div></div>,
  MoreButton: () => <div></div>,
  IconButton: () => <div></div>,
  Dropdown: () => <div></div>,
  SearchBar: () => <div></div>,
  Tab: () => <div></div>,
  TabAnchor: () => <div></div>,
  Tabs: () => <div></div>,
  Tooltip: () => <div></div>,
  HelpIcon: () => <div></div>,
  FullScreenModal: () => <div></div>,
  CardContainer: () => <div></div>,
  CardList: () => <div></div>,
  CardListControls: () => <div></div>,
  CardsListWrapper: () => <div></div>,
  NoResults: () => <div></div>,
  ColorInput: () => <div></div>,
}));

jest.mock('../../config/global-dependencies/smart-builder-sdk', () => ({
  useApiRequest: () => <div></div>,
  SdkProvider: () => <div></div>,
  OAuthProvider: () => <div></div>,
  useOAuthContext: () => <div></div>,
  useAppOauth: () => <div></div>,
  getAfterFormSubmitScript: () => <div></div>,
  createUIEventTracking: () => <div></div>,
  usePaginateResults: () => <div></div>,
  useImageGalleryContext: () => <div></div>,
  Script: () => <div></div>,
  WithControls: () => <div></div>,
  WithStyles: () => <div></div>,
  ControlButton: () => <div></div>,
  useImageGallery: () => <div></div>,
  spacing: () => <div></div>,
  fontSize: () => <div></div>,
  colors: () => <div></div>,
  fontWeight: () => <div></div>,
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
    const conversionButton = screen.getByTestId('app-conversion-tracking');
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
