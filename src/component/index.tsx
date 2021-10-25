import { ChangeFirstNameModal } from "./change-first-name-modal";
import { exportBuildMethod } from "config/utils/export-build-method";
import React, { useState } from "config/global-dependencies/react";
import { migrations } from "./migrations";

const bundleMethod = ({ component }: any, Schema: any) => {
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
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 20" fill="none">
                  <g>
                    <path d="M24 0H0V1.25H24V0Z" fill="#565656"></path>
                    <path d="M16 6H0V7.25H16V6Z" fill="#565656"></path>
                    <path d="M24 12H0V13.25H24V12Z" fill="#565656"></path>
                    <path d="M16 18H0V19.25H16V18Z" fill="#565656"></path>
                  </g>
                </svg>
              ),
              label: "Text Align",
              type: "subtoolbar", // This is where/how the control panel will be displayed
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
