import type { GlobalConfig } from "payload";

export const Reviews: GlobalConfig = {
  slug: "reviews",
  typescript: {
    interface: "Reviews",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      label: "Background Image",
      name: "bg",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "reviews",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name",
            },
            {
              name: "text",
              type: "text",
              label: "Text",
            },
            {
              name: "link",
              type: "text",
              label: "Link",
            },
          ],
        },
      ],
    },
  ],
};
