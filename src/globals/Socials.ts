import type { GlobalConfig } from "payload";

import newLink from "@/fields/customSelect/field";

export const Socials: GlobalConfig = {
  slug: "socials",
  access: {
    read: () => true,
  },
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
