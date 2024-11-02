import type { GlobalConfig } from "payload";

export const Account: GlobalConfig = {
  slug: "account",
  typescript: {
    interface: "Account",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      label: "Sidebar",
      name: "sidebar",
      type: "group",
      fields: [
        {
          label: "Title",
          name: "title",
          type: "text",
        },
        {
          name: "links",
          type: "array",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "url",
                  type: "text",
                  label: "Link",
                  required: true,
                },
                {
                  name: "label",
                  type: "text",
                  label: "Label",
                  required: true,
                },
                {
                  name: "description",
                  type: "text",
                  label: "Description",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
