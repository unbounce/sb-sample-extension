const HelloWorldSection = {
  contentTypeId: "helloWorld-section",
  displayName: "HelloWorld Section",
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
            form: {
              order: 2,
              visible: true,
              column: {
                start: 4,
                end: 10,
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
            form: {
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
              value: "HelloWorld Section",
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
                      text: "Add a super powered form to your page using HelloWorld.",
                    },
                  ],
                },
              ],
            },
            overrides: {},
          },
        },
        form: {
          placeholder: {
            contentTypeId: "helloWorld",
            data: {
              firstName: "FirstName",
              lastName: "LastName",
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

const section = ({ section }: any) => {
  return section.bundle({ ...HelloWorldSection, tags: ["section"] });
};

export default section;
