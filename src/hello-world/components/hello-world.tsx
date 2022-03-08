// eslint-disable-next-line
import React, { useState } from 'react';
import { ComponentProps } from 'smart-builder-sdk';

import { ChangeFirstNameModal } from './change-first-name-modal';

export const HelloWorld = ({
  data,
  dispatch,
}: ComponentProps<{ firstName: string; lastName: string; styles: string }>) => {
  const { firstName, lastName } = data;
  const [showModal, setShowModal] = useState(false);

  const updateFirstName = (newFirstName: string) => {
    dispatch((api) => api.get('firstName').set(newFirstName));
    setShowModal(false);
  };

  return (
    <>
      <div data-testid="hello-world-content" className={data.styles}>
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
