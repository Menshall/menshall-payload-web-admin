import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  typescript: {
    interface: "Settings",
  },
  graphQL: {
    name: "Settings",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "postsPage",
      type: "relationship",
      relationTo: "pages",
      label: "Posts page",
    },
    {
      label: "Logo",
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      label: "Background Logo",
      name: "bgLogo",
      type: "upload",
      relationTo: "media",
    },
  ],
};
