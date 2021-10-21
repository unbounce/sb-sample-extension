export const v1: any = {
  from: 0,
  to: 1,
  run: (entity: any) => {
    entity.data.styles = { textAlign: "left" };
    return entity;
  },
};

export const migrations: any[] = [v1];
