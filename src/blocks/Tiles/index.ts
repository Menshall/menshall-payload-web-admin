import type { Block } from "payload";

import richText from "../../fields/richText";

export const Tiles: Block = {
  slug: "tiles",
  labels: {
    singular: "Tile",
    plural: "Tiles",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      defaultValue: "Переваги Курсу Барберів у Men's Hall",
    },
    {
      name: "list",
      type: "array",
      label: "Tiles",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        ...richText({
          label: "RichTextLabel",
          name: "tableRichText",
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
