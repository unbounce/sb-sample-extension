export function exportBuildMethod(bundleMethod: any) {
  (window as any)["ub"] = {
    externalApp: {
      bundleMethod,
    },
  };
}
