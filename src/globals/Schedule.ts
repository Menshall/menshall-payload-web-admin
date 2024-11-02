import type { GlobalConfig } from "payload";

export const Schedule: GlobalConfig = {
  slug: "schedule",
  typescript: {
    interface: "Schedule",
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
      name: "steps",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Title",
            },
            {
              name: "secondaryTitle",
              type: "text",
              label: "SecondaryTitle",
            },
          ],
        },
      ],
    },
    {
      name: "successSubtitle",
      type: "text",
      label: "Success Subtitle",
    },
    {
      name: "successText",
      type: "text",
      label: "Success Text",
    },
    {
      name: "successGreeting",
      type: "text",
      label: "Success Greeting",
    },
    {
      name: "nextButtonText",
      type: "text",
      label: "Next Button Text",
    },
    {
      name: "prevButtonText",
      type: "text",
      label: "Prev Button Text",
    },
    {
      name: "submitButtonText",
      type: "text",
      label: "Submit Button Text",
    },
  ],
};
