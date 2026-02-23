import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "car-detailing-studio",
  title: "Car Detailing Admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("pricing").title("Pricing Plans"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("faq").title("FAQ"),
            S.documentTypeListItem("galleryImage").title("Gallery"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
