import type { GlobalConfig } from "payload";


export const AcademyProgram: GlobalConfig = {
  slug: "academyProgram",
  typescript: {
    interface: "AcademyProgram",
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
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
    },
    {
      label: "Image",
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "program",
      type: "array",
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "number",
              type: "text",
              label: "Number",
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
    {
      name: "helperText",
      type: "text",
      label: "Helper Text",
    },
    newLink,
  ],
};
