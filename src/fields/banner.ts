import type { Field } from "payload";

import richText from "@/fields/richText";
import newLink from "@/fields/customSelect/field";

export const banner: Field = {
  name: "banner",
  label: false,
  type: "group",
  fields: [
    ...richText({
      label: "Caption",
      name: "caption",
    }),
    {
      label: "Desktop Media",
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      label: "Mobile Media",
      name: "mobile",
      type: "upload",
      relationTo: "media",
    },
    newLink,
  ],
};
