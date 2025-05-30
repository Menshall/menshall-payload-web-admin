import type { Field } from "payload";

import deepMerge from "../utilities/deepMerge";
import formatSlug from "../utilities/formatSlug";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = "title", overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides
  );
