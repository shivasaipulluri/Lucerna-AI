# Analytics Pipeline for Model Training

This document provides instructions on how to set up and use the analytics pipeline for model training.

## Setup

1. Add the required environment variables to your project:
  - `MODEL_DATABASE_URL`: The URL of the database where the analytics data will be stored
  - `ANON_SALT`: A random string used to anonymize user IDs

2. Generate the Prisma client for the model database:
  \`\`\`
  npm run generate-model-client
  \`\`\`

3. Initialize the model database:
  \`\`\`
  npm run init-model-db
  \`\`\`

4. Check if the model database is properly configured:
  \`\`\`
  npm run check-model-db
  \`\`\`

## Usage

### Server-Side Logging

To log events from server-side code, use the functions in `lib/analytics-integration.ts`:

\`\`\`typescript
import { logResumeTailoringSuccess } from "@/lib/analytics-integration"

// After a successful resume tailoring
await logResumeTailoringSuccess(
  userId,
  resumeId,
  resumeText,
  jobDescription,
  tailoredText,
  atsScore,
  jdScore,
  tailoringMode,
  version,
  isRefinement
)
\`\`\`

### Client-Side Logging

For client-side logging, use the `ButtonWithAnalytics` component:

\`\`\`tsx
import { ButtonWithAnalytics } from "@/components/analytics/button-with-analytics"

// Replace a regular Button with ButtonWithAnalytics
<ButtonWithAnalytics
  elementName="refine-resume-button"
  action="click"
  metadata={{ resumeId: "123" }}
>
  Refine Resume
</ButtonWithAnalytics>
\`\`\`

Or use the analytics hooks directly:

\`\`\`typescript
import { logInteractionEvent } from "@/lib/analytics-hooks"

// Log an interaction event
await logInteractionEvent({
  userId,
  action: "click",
  element: "refine-button",
  metadata: { resumeId: "123" },
})
\`\`\`

## Data Collection

The following types of data are collected:

1. **Resume Events**: Events related to resume tailoring, such as uploading a resume, tailoring a resume, refining a resume, copying a resume, and downloading a resume.
2. **Interaction Events**: Events related to user interactions with the UI, such as clicking buttons, hovering over elements, etc.

## Privacy

All data is anonymized before being stored in the database:

1. User IDs are hashed with a salt to create anonymous user IDs.
2. Personal identifiable information (PII) is scrubbed from text data, including:
  - Email addresses
  - Phone numbers
  - URLs
  - Social security numbers
  - Street addresses
  - Names
\`\`\`

Let's create a .env.example file for the analytics pipeline:

\`\`\`plaintext file=".env.example"
# Model training database URL
MODEL_DATABASE_URL="postgresql://postgres:password@localhost:5432/model_training"
# Salt for anonymizing user IDs
ANON_SALT="random-salt-string-for-anonymizing-user-ids"
