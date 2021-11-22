import { ChangeFirstNameModal } from "./change-first-name-modal";
import { exportComponent } from "config/utils/export-build-method";
import React, { useState } from "config/global-dependencies/react";
import { migrations } from "./migrations";

const bundleMethod = (component: any, Schema: any) => {
  return component({
    componentTypeId: "helloWorld", // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
    displayName: "HelloWorld",
    schema: Schema.object({
      firstName: Schema.string().noControls(),
      lastName: Schema.string().groupControls({
        icon: <span>LN</span>,
        label: "Last Name",
      }),
      styles: Schema.object({
        textAlign: Schema.style("text-align", {
          layoutSpecific: true,
        }).withControl("textAlign"),
      }).mapData((data: any) => Object.values(data).join(" ")),
    }),
    Component({ data, dispatch }: any) {
      const { firstName, lastName } = data;
      const [showModal, setShowModal] = useState(false);

      const updateFirstName = (newFirstName: string) => {
        dispatch((api: any) => api.get("firstName").set(newFirstName));
        setShowModal(false);
      };

      return (
        <>
          <div className={data.styles}>
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
    version: migrations.length,
    migrations,
  });
};

exportComponent(bundleMethod);
