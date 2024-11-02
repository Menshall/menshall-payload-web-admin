import type { GlobalConfig } from "payload";
import { barbersFetchButton } from "@/fields/BarbersFetchButton";
import { socials } from "@/fields/socials";

export const AcademyTeachers: GlobalConfig = {
  slug: "academyTeachers",
  typescript: {
    interface: "AcademyTeachers",
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
      name: "teachers",
      type: "array",
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              label: "Image",
              name: "image",
              type: "upload",
              relationTo: "media",
              // admin: {
              //   width: "50%",
              // },
            },
            {
              name: "name",
              type: "text",
              label: "Name",
            },
            {
              name: "description",
              type: "text",
              label: "Description",
            },
            {
              name: "text",
              type: "text",
              label: "Text",
            },
            socials,
          ],
        },
      ],
    },
  ],
};
