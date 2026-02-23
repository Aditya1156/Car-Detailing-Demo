import { defineType, defineField } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing Plans",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Plan Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (e.g. 1,999)",
      type: "string",
    }),
    defineField({
      name: "period",
      title: "Period (e.g. per session, lasts 2 years)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "popular",
      title: "Most Popular?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
