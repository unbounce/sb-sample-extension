import React, { useState } from 'react';
import { WithControls, ControlButton, WithStyles, Script } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { ChangeFirstNameModal } from './change-first-name-modal';
import { Panel } from './control-panel';
import { getInlineScript, runOnloadMethod } from './script';

export type DataStructure = { firstName: string; lastName: string; styles: { textAlign: string } };

const HelloWorld = ({ data, dispatch, className, mode }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { firstName, lastName } = data;
  const [showModal, setShowModal] = useState(false);

  const updateFirstName = (newFirstName: string) => {
    dispatch((api) => api.get('firstName').set(newFirstName));
    setShowModal(false);
  };
  const isViewMode = mode.type === 'view';

  return (
    <>
      <div data-testid="hello-world-content" className={className}>
        Hello,{' '}
        <button data-testid="hello-world-first-name-btn" onClick={() => setShowModal(true)}>
          {firstName}
        </button>{' '}
        {lastName}
      </div>
      {/* To test the External Script we are loading momentjs from a CDN(we chose moment just for simplicity), after loading the library the onload method will run. If you see in the example the mode is set to view and we are using condition: isViewMode. To test it in "edit" mode, you can modify mode to edit and condition to true and the alert should show when editing your landing page  */}
      {isViewMode ? (
        <Script
          mode="view"
          dependencies={[]}
          externalScript={{
            src: 'https://rawgit.com/moment/moment/2.2.1/min/moment.min.js',
            scriptId: 'moment-sample-script',
            onloadMethod: runOnloadMethod(), //the onLoadMethod is just an alert of the current time formated.
            condition: isViewMode, // in this example we are using modeView as condition for testing purposes, but you can use any condition as boolean.
          }}
        />
      ) : null}
      {/* To test the Inline Script go to view mode and check the console in devtools, you will get the log coming from getInlineScript() */}
      {isViewMode ? <Script mode={mode.type} dependencies={[]} inlineScript={getInlineScript()} /> : null}

      {showModal && (
        <ChangeFirstNameModal firstName={firstName} onUpdate={updateFirstName} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

const textAlignLabel = 'My own text align';

export default WithStyles(
  WithControls(HelloWorld, [
    'text-align', // You can pass the id of a registered control
    {
      // Or can define your own
      id: 'custom-text-align',
      label: textAlignLabel,
      Button: (props) => (
        <ControlButton label={textAlignLabel} active={false} {...props}>
          An Icon
        </ControlButton>
      ),
      Panel,
      type: 'subtoolbar',
    },
  ]),
  'styles', // The object key where styles are applied from the Schema
  'paragraph', // Optional: value from the styleguide to be applied for default styling
);
