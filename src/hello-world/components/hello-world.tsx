import React, { useState } from 'react';
import { WithControls, ControlButton, WithStyles } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'smart-builder-sdk-types';

import { ChangeFirstNameModal } from './change-first-name-modal';

type DataStructure = { firstName: string; lastName: string; styles: { textAlign: string } };

const HelloWorld = ({ data, dispatch, className }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { firstName, lastName } = data;
  const [showModal, setShowModal] = useState(false);

  const updateFirstName = (newFirstName: string) => {
    dispatch((api) => api.get('firstName').set(newFirstName));
    setShowModal(false);
  };

  return (
    <>
      <div data-testid="hello-world-content" className={className}>
        Hello,{' '}
        <button data-testid="hello-world-first-name-btn" onClick={() => setShowModal(true)}>
          {firstName}
        </button>{' '}
        {lastName}
      </div>
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
      Panel: ({ dispatch }) => (
        <div data-testid="custom-text-align-panel">
          Where do you want that text
          <button
            onClick={() =>
              dispatch((api) => {
                api.get('styles').set({ textAlign: 'left' });
              })
            }
            data-testid={`button-text-align-left`}
          >
            Left
          </button>
          <button
            onClick={() =>
              dispatch((api) => {
                api.get('styles').set({ textAlign: 'center' });
              })
            }
            data-testid={`button-text-align-center`}
          >
            Center
          </button>
          <button
            onClick={() =>
              dispatch((api) => {
                api.get('styles').set({ textAlign: 'right' });
              })
            }
            data-testid={`button-text-align-right`}
          >
            Right
          </button>
        </div>
      ),
      type: 'subtoolbar',
    },
  ]),
  'styles', // The object key where styles are applied from the Schema
  'paragraph', // Optional: value from the styleguide to be applied for default styling
);
