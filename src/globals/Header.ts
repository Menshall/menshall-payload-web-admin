import type { GlobalConfig } from "payload";

import newLink from "@/fields/customSelect/field";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "navItems",
      type: "array",
      required: true,
      maxRows: 6,
      fields: [
        newLink,
        {
          name: "hasSubItems",
          label: "Add SubItems",
          type: "checkbox",
        },
        {
          name: "subNavItems",
          type: "array",
          required: true,
          maxRows: 3,
          admin: {
            condition: (_, { hasSubItems }) => Boolean(hasSubItems),
          },
          fields: [newLink],
        },
      ],
    },
    newLink,
  ],
};
