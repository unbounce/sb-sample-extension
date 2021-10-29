export function exportComponent(bundleMethod: any) {
  (window as any)["ub"] = {
    externalApp: {
      component: ({ component }: any, Schema: any) =>
        bundleMethod(component, Schema),
    },
  };
}
export function exportSection(bundleMethod: any) {
  (window as any)["ub"] = {
    externalApp: {
      section: ({ section }: any) => bundleMethod(section),
    },
  };
}
export function exportControl(bundleMethod: any) {
  (window as any)["ub"] = {
    externalApp: {
      control: () => bundleMethod(),
    },
  };
}
