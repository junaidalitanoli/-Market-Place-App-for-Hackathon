import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'xw5k6irr',
  dataset: 'production',
  apiVersion: '2023-05-03', // Use a recent date
  useCdn: true, // Set to false for fresh data
});

export default client; // Ensure this is the correct export