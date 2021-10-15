import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  firstName: string;
  onUpdate: (newFirstName: string) => void;
  onClose: () => void;
}

const CloseButton = styled.button`
  background: #252525;
  color: #fff;
  right: 0;
  position: absolute;
  top: 0;
  font-size: 50px;
`;

const Modal = styled.div`
  background: #fff;
  height: 200px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 23;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Overlay = styled.div`
  background: #000;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 22;
`;

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
        <input
          type="text"
          value={localFirstName}
          onChange={({ currentTarget: { value } }) => setLocalFirstName(value)}
        />
      </Modal>
      <Overlay />
    </>
  );
};
