const FoobarSection = {
  contentTypeId: "foobar-section",
  displayName: "Foobar Section",
  templates: {
    children: {
      id: "children",
      name: "Foobar",
      defaultLayoutId: "foobar001Lg",
      renderer: "grid",
      layouts: {
        foobar001Lg: {
          id: "foobar001Lg",
          displayName: "Foobar Desktop",
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
        foobar001Sm: {
          id: "foobar001Sm",
          displayName: "Foobar Mobile",
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
              value: "Foobar Section",
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
                      text: "Add a super powered form to your page using Foobar.",
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
            contentTypeId: "foobar",
            data: {},
            overrides: {},
          },
        },
      },
      options: {
        "001": {
          id: "001",
          displayName: "Foobar 1",
          breakpoints: {
            lg: {
              layoutId: "foobar001Lg",
            },
            sm: {
              layoutId: "foobar001Sm",
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

export default (React: any, bundle: any, section: any, Schema: any) => {
  return section.bundle({ ...FoobarSection, tags: ["section"] });
};
