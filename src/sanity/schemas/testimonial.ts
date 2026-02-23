import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Car Type (e.g. BMW Owner)",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
      initialValue: 5,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
