import type { GlobalConfig } from "payload";
import { barbersFetchButton } from "@/fields/BarbersFetchButton";
export const Barbers: GlobalConfig = {
  slug: "barbers",
  typescript: {
    interface: "Barbers",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    barbersFetchButton,
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
      label: "Button Text",
      defaultValue: "Записатись",
      required: true,
    },
    {
      name: "barbers",
      type: "array",
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
              name: "location",
              type: "text",
              label: "Location",
              // hidden: true,
            },
            {
              name: "id",
              type: "text",
              label: "ID",
              // hidden: true,
            },
            {
              type: "row",
              fields: [
                {
                  name: "name",
                  type: "text",
                  label: "Name",
                  admin: {
                    width: "100%",
                  },
                },
                {
                  name: "specialization",
                  type: "text",
                  label: "Specialization",
                  admin: {
                    width: "100%",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
