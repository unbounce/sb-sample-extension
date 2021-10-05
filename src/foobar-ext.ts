// import type { ThirdPartyExtensionScript } from "../../content-creation-editor/src/editor/extensions/utils";
import React from "react";

const myThing = (
  OtherReact: any,
  bundle: any,
  sectionBundle: any,
  Schema: any
) => {
  const schema = Schema.object({
    // TODO: save crop settings
    src: Schema.string(),
    transformedSrc: Schema.string(),
    alt: Schema.string(),
  });
  return bundle({
    componentTypeId: "foobar",
    displayName: "Foobar",
    schema: Schema.object({
      // TODO: Only demo for now
      formId: Schema.string()
        .overrideControls([
          {
            Control: () => {
              return React.createElement("div", null, "My foobar stuff");
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
      return React.createElement("div", null, "Foobar Component Placeholder");
    },
  });
};

export default myThing;
