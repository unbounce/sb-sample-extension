import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { _Script } from 'smart-builder-sdk';

import { CalendlyViewer, getCalendlyScript } from './calendly-viewer';

const mockFunction = jest.fn();

type mockChildren = {
  children: JSX.Element;
  minimal: string;
};

const ChildComponent = ({ children, ...props }: mockChildren) => <div {...props}>{children}</div>;

const ScriptMock: _Script = ({ ...props }) => (
  <script data-testid={props?.externalScript?.scriptId} src={props?.externalScript?.src}>
    {props?.externalScript?.onloadMethod}
  </script>
);

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
  Script: ScriptMock,
  WithControls: () => <div></div>,
  WithStyles: () => <div></div>,
  ControlButton: () => <div></div>,
  useImageGallery: () => <div></div>,
  spacing: () => <div></div>,
  fontSize: () => <div></div>,
  colors: () => <div></div>,
  fontWeight: () => <div></div>,
}));

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
