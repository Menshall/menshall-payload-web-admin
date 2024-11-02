import type { Block } from "payload";

import newLink from "@/fields/customSelect/field";

export const LinkBlock: Block = {
  slug: "link",
  labels: {
    singular: "Link",
    plural: "Links",
  },
  fields: [newLink],
};
