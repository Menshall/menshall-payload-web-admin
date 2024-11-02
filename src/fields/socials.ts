import type { Field } from "payload";

import newLink from "@/fields/customSelect/field";

export const socials: Field = {
  name: "socials",
  label: false,
  type: "group",
  fields: [
    {
      name: "socials",
      type: "array",
      fields: [
        {
          label: "Name",
          name: "name",
          type: "select",
          defaultValue: "default",
          required: true,
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              value: "instagram",
              label: "Instagram",
            },
            {
              value: "telegram",
              label: "Telegram",
            },
            {
              value: "facebook",
              label: "Facebook",
            },
          ],
        },
        newLink,
      ],
    },
  ],
};
