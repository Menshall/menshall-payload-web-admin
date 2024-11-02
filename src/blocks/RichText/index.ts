import type { Block } from "payload";

import richText from "../../fields/richText";

export const RichTextBlock: Block = {
  slug: "richText",
  fields: [
    ...richText({
      label: "RichTextLabel",
      name: "richText",
    }),
  ],
};
