export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "products",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        {
          name: "description",
          keypath: "description",
          options: { unique: false },
        },
        { name: "photo", keypath: "photo", options: { unique: false } },
        { name: "amount", keypath: "amount", options: { unique: false } },
      ],
    },
  ],
};
