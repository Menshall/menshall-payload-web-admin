import type { Block } from "payload";

import richText from "../../fields/richText";

export const Tabs: Block = {
  slug: "tabs",
  labels: {
    singular: "Tab",
    plural: "Tabs",
  },
  fields: [
    {
      name: "secondLabel",
      type: "text",
      label: "Second Label",
      defaultValue: "Вартість:",
    },
    {
      name: "thirdLabel",
      type: "text",
      label: "Third label",
      defaultValue: "Тривалість процедури:",
    },
    {
      name: "list",
      type: "array",
      label: "Tabs",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Title",
            },
            {
              name: "price",
              type: "text",
              label: "Price",
            },
            {
              name: "duration",
              type: "text",
              label: "Duration",
            },
          ],
        },
        ...richText({
          label: "RichTextLabel",
          name: "tabsRichText",
        }),
        {
          label: "Image",
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
