import type { Field } from "payload";
import Button from "@/fields/Button";
export const barbersFetchButton: Field = {
  name: "barbersFetchButton",
  label: false,
  type: "group",
  admin: {
    components: {
      Field: Button,
    },
  },
  fields: [],
};
