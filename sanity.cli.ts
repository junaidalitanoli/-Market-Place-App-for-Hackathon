import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId) {
  console.error("🚨 Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
}

if (!dataset) {
  console.error("🚨 Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
}

export default defineCliConfig({
  api: {
    projectId: projectId || "default_project_id",  // Replace with your actual project ID
    dataset: dataset || "production", // Use "production" as a default dataset
  },
});

