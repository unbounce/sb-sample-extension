import { ChangeFirstNameModal } from "./change-first-name-modal";
import React from "config/global-dependencies/react";
const { useState } = React;

const bundleMethod = ({ component }: any, Schema: any) => {
  return component({
    componentTypeId: "helloWorld",
    displayName: "HelloWorld",
    schema: Schema.object({
      firstName: Schema.string().noControls(),
      lastName: Schema.string(),
    }),
    Component({ data, dispatch }: any) {
      const { firstName, lastName } = data;
      const [showModal, setShowModal] = useState(false);

      const updateFirstName = (newFirstName: string) => {
        dispatch((api: any) => api.get("firstName").set(newFirstName));
      };

      return (
        <>
          <div>
            Hello,{" "}
            <button onClick={() => setShowModal(true)}>{firstName}</button>{" "}
            {lastName}
          </div>
          {showModal && (
            <ChangeFirstNameModal
              firstName={firstName}
              onUpdate={updateFirstName}
              onClose={() => setShowModal(false)}
            />
          )}
        </>
      );
    },
  });
};

window["ub"] = {
  externalApp: {
    bundleMethod,
  },
};
