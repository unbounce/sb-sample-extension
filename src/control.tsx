import React from 'config/global-dependencies/react';

export const Control = {
  controlId: 'textAlign2',
  controlIdToOverwrite: 'textAlign',
  Component: ({ dispatch }: any) => {
    return (
      <div>
        <button
          onClick={() => {
            dispatch((api: any) => {
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
