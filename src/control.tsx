import React from 'config/global-dependencies/react';

import { exportControl } from '../config/utils/export-build-method';

exportControl(() => {
  return {
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
});
