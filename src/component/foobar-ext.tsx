// import type { ThirdPartyExtensionScript } from "../../content-creation-editor/src/editor/extensions/utils";
import React from "react";

export default (bundle: any, sectionBundle: any, Schema: any) => {
  return bundle({
    componentTypeId: "foobar",
    displayName: "Foobar",
    schema: Schema.object({
      // TODO: Only demo for now
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
