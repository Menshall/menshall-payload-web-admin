import type { GlobalConfig } from "payload";

import newLink from "@/fields/customSelect/field";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "text",
    },
    {
      label: "Sections",
      name: "sections",
      type: "array",
      maxRows: 3,
      fields: [
        {
          label: "Label",
          name: "label",
          type: "text",
        },
        {
          label: "Links",
          name: "links",
          type: "array",
          fields: [newLink],
        },
      ],
    },
  ],
};
