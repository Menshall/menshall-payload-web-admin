import type { Block } from "payload";

import richText from "../../fields/richText";

export const List: Block = {
  slug: "list",
  labels: {
    singular: "List",
    plural: "List",
  },
  fields: [
    {
      name: "list",
      type: "array",
      label: "List",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        ...richText({
          label: "RichTextLabel",
          name: "listRichText",
        }),
      ],
    },
  ],
};
