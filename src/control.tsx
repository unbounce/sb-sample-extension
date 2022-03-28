import React from 'react';
import { ComponentProps } from 'smart-builder-sdk-types';

export const Control = {
  controlId: 'textAlign2',
  Component: ({ dispatch }: ComponentProps<string>) => {
    return (
      <div>
        <button
          onClick={() => {
            dispatch((api) => {
              api.set('right');
            });
          }}
        >
          Align right
        </button>
      </div>
    );
  },
  options: {
    icon: <>Test Icon</>,
    label: 'Text Align Stuff',
    overrideControls: true,
  },
};
