import React from "config/global-dependencies/react";
import { exportControl } from "../config/utils/export-build-method";

exportControl(() => {
  return {
    controlId: "textAlign",
    Component: ({ data, dispatch }: any) => {
      return (
        <div>
          {data}{" "}
          <button
            onClick={() => {
              dispatch((api: any) => {
                api.set("right");
              });
            }}
          >
            Click me
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
