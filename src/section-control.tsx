import React from "config/global-dependencies/react";
import { exportControl } from "../config/utils/export-build-method";

exportControl(() => {
  return {
    controlId: "extraMoreItem",
    Component: ({ data, dispatch }: any, controls: any[]) => {
      return (
        <div>
          <button
            onClick={() => {
              dispatch((api: any) => {
                api.get("children").addSlot("text");
              });
            }}
          >
            Add text slot
          </button>
        </div>
      );
    },
    options: {
      icon: <>Test Icon</>,
      label: "Text Align Stuff",
    },
  };
});
