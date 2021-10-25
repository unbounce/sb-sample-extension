import React, { useState } from "config/global-dependencies/react";
import { Modal, CloseButton, Overlay } from "./styled";
import { Props } from "./types";

export const ChangeFirstNameModal = ({
  firstName,
  onUpdate,
  onClose,
}: Props) => {
  const [localFirstName, setLocalFirstName] = useState(firstName);
  return (
    <>
      <Modal>
        <CloseButton onClick={onClose}>x</CloseButton>
        <label>First Name:</label>
        <br />
        <input
          type="text"
          value={localFirstName}
          onChange={({ currentTarget: { value } }) => setLocalFirstName(value)}
        />
        <br />
        <button onClick={(e) => onUpdate(localFirstName)}>Save</button>
      </Modal>
      <Overlay />
    </>
  );
};
