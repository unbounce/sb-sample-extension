import React, { useState } from 'config/global-dependencies/react';

import { ChangeFirstNameModal } from './change-first-name-modal';

export const HelloWorld = ({ data, dispatch }: any) => {
  const { firstName, lastName } = data;
  const [showModal, setShowModal] = useState(false);

  const updateFirstName = (newFirstName: string) => {
    dispatch((api: any) => api.get('firstName').set(newFirstName));
    setShowModal(false);
  };

  return (
    <>
      <div className={data.styles}>
        Hello, <button onClick={() => setShowModal(true)}>{firstName}</button> {lastName}
      </div>
      {showModal && (
        <ChangeFirstNameModal firstName={firstName} onUpdate={updateFirstName} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};
