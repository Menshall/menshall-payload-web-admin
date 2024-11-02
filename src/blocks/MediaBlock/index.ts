import type { Block } from "payload";

export const MediaBlock: Block = {
  slug: "mediaBlock",
  fields: [
    {
      name: "mobileHidden",
      type: "checkbox",
      label: "Hide on Mobile",
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
