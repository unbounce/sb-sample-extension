import { exportSection } from "../config/utils/export-build-method";

const HelloWorldSection = {
  templates: {
    children: {
      id: "children",
      name: "HelloWorld",
      defaultLayoutId: "helloWorld001Lg",
      renderer: "grid",
      layouts: {
        helloWorld001Lg: {
          id: "helloWorld001Lg",
          displayName: "HelloWorld Desktop",
          data: {
            columns: { type: "auto", count: 12 },
            columnGap: 12,
            padding: {
              top: 85,
              right: 0,
              bottom: 85,
              left: 0,
            },
          },
          slots: {
            heading: {
              order: 0,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            description: {
              order: 1,
              visible: true,
              column: {
                start: 3,
                end: 11,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            helloWorld: {
              order: 2,
              visible: true,
              column: {
                start: 5,
                end: 9,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
          },
        },
        helloWorld001Sm: {
          id: "helloWorld001Sm",
          displayName: "HelloWorld Mobile",
          data: {
            columns: { type: "auto", count: 12 },
            columnGap: 12,
            padding: {
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            },
          },
          slots: {
            heading: {
              order: 0,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
            description: {
              order: 1,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
            helloWorld: {
              order: 2,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
          },
        },
      },
      slots: {
        heading: {
          placeholder: {
            contentTypeId: "heading1",
            data: {
              value: "Hello World Section",
              styles: {
                textAlign: "center",
              },
            },
            overrides: {},
          },
        },
        description: {
          placeholder: {
            contentTypeId: "text",
            data: {
              value: [
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    },
                  ],
                },
              ],
            },
            overrides: {},
          },
        },
        helloWorld: {
          placeholder: {
            contentTypeId: "helloWorld",
            data: {
              firstName: "FirstName",
              lastName: "LastName",
              styles: {
                textAlign: "center",
              },
            },
            overrides: {},
          },
        },
      },
      options: {
        "001": {
          id: "001",
          displayName: "HelloWorld 1",
          breakpoints: {
            lg: {
              layoutId: "helloWorld001Lg",
            },
            sm: {
              layoutId: "helloWorld001Sm",
            },
          },
        },
      },
      breakpoints: {
        lg: {
          minWidth: 601,
        },
        sm: {
          maxWidth: 600,
        },
      },
    },
  },
};

exportSection((section: any) => {
  return section({
    contentTypeId: "helloWorld-section",
    displayName: "HelloWorld Section",
    tags: ["section"],
    ...HelloWorldSection,
  });
});
