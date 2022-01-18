import React, { useState } from 'config/global-dependencies/react';

import { Modal, CloseButton, Overlay } from '../styled';
import { Props } from '../types';

export const ChangeFirstNameModal = ({ firstName, onUpdate, onClose }: Props) => {
  const [localFirstName, setLocalFirstName] = useState(firstName);
  return (
    <>
      <Modal>
        <CloseButton onClick={onClose}>x</CloseButton>
        <label>
          <strong>First Name:</strong>
          <br />
          <input
            type="text"
            value={localFirstName}
            onChange={({ currentTarget: { value } }) => setLocalFirstName(value)}
          />
        </label>
        <br />
        <button onClick={() => onUpdate(localFirstName)}>Save</button>
      </Modal>
      <Overlay />
    </>
  );
};
