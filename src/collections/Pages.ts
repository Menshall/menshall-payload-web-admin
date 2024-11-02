import type { CollectionConfig } from "payload";
import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { slugField } from "@/fields/slug";
import { banner } from "@/fields/banner";
import { Content } from "@/blocks/Content";
import { MediaBlock } from "@/blocks/MediaBlock";
import { Archive } from "@/blocks/ArchiveBlock";
import { Tables } from "@/blocks/Table";
import { LinkBlock } from "@/blocks/Link";
import { Tabs } from "@/blocks/Tabs";
import { List } from "@/blocks/List";
import { Tiles } from "@/blocks/Tiles";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "publishedAt",
          type: "date",
        },
        slugField(),
      ],
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    banner,
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [
                Content,
                MediaBlock,
                Archive,
                Tables,
                LinkBlock,
                Tabs,
                List,
                Tiles,
              ],
            },
          ],
        },
      ],
    },
  ],
};
