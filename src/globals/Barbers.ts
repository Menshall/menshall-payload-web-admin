import type { GlobalConfig } from "payload";

export const Barbers: GlobalConfig = {
  slug: "barbers",
  typescript: {
    interface: "Barbers",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      label: "Button Text",
      defaultValue: "Записатись",
      required: true,
    },
  ],
};
