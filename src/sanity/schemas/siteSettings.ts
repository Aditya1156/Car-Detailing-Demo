import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number (with country code, no +)",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "weekdayHours",
      title: "Weekday Working Hours",
      type: "string",
    }),
    defineField({
      name: "weekendHours",
      title: "Weekend Working Hours",
      type: "string",
    }),
    defineField({
      name: "googleMapsEmbed",
      title: "Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "heroBg",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "Twitter/X URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "businessName" },
  },
});
