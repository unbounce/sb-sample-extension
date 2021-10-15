import React from "react";

const foobar = ({ component }: any, Schema: any) => {
  return component({
    componentTypeId: "foobar",
    displayName: "Foobar",
    schema: Schema.object({
      formId: Schema.string()
        .overrideControls([
          {
            Control: () => {
              return <div>My foobar stuff</div>;
            },
          },
        ])
        .groupControls({ label: "" }),
    }).groupControls({
      icon: React.createElement("span", null, "Brush"),
      label: "Foobar",
      type: "full-modal",
    }),
    Component({ data, dispatch }: any) {
      data.formId;
      // dispatch((api) => api.get("formId").set("test"));
      return <div>Foobar Component Placeholder</div>;
    },
  });
};

export default foobar;
