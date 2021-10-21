import { ChangeFirstNameModal } from "./change-first-name-modal";
import { exportBuildMethod } from "config/utils/export-build-method";
import React, { useState } from "config/global-dependencies/react";
import { migrations } from "./migrations";

const bundleMethod = ({ component }: any, Schema: any) => {
  return component({
    componentTypeId: "helloWorld",
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
        }).overrideControls([
          {
            Control: ({ data, dispatch }: any) => {
              const onChange = (value: string) => {
                dispatch((api: any) => api.set(value));
              };

              return (
                <div>
                  <button onClick={() => onChange("left")}>Left</button>
                  <button onClick={() => onChange("center")}>Center</button>
                  <button onClick={() => onChange("right")}>Right</button>
                </div>
              );
            },
            options: {
              icon: <span>TA</span>,
              label: "Text Align",
              type: "subtoolbar",
            },
          },
        ]),
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

exportBuildMethod(bundleMethod);
