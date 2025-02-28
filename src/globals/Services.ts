import type { GlobalConfig } from "payload";



export const Services: GlobalConfig = {
  slug: "services",
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "text",
    },
    {
      label: "Secondary Title",
      name: "secondaryTitle",
      type: "text",
    },
    {
      label: "Third Title",
      name: "thirdTitle",
      type: "text",
    },
    {
      name: "services",
      label: "Services",
      type: "array",
      maxRows: 3,
      required: true,
      fields: [
        {
          label: "Title",
          name: "title",
          type: "text",
          required: true,
        },
        {
          label: "Description",
          name: "description",
          type: "text",
          required: true,
        },
        {
          label: "Image",
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        newLink,
      ],
    },
  ],
};
