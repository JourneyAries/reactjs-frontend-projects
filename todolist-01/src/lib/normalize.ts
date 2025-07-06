export const normalizedMongoId = <T extends { _id: unknown }>(doc: T) => {
  const { _id, ...rest } = doc;
  return { id: String(_id), ...rest };
};

export const normalizedArray = <T extends { _id: unknown }>(docs: T[]) => {
  return docs.map(normalizedMongoId);
};
