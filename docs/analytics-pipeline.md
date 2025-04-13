# Analytics Pipeline for Model Training

This document describes the analytics pipeline used for collecting anonymized behavioral data for model training.

## Overview

The analytics pipeline is designed to collect anonymized data about user interactions and resume tailoring events. This data is stored in a separate database from the main application database to ensure complete isolation.

## Data Collection

The following types of data are collected:

1. **Resume Events**: Events related to resume tailoring, such as uploading a resume, tailoring a resume, refining a resume, copying a resume, and downloading a resume.
2. **Interaction Events**: Events related to user interactions with the UI, such as clicking buttons, hovering over elements, etc.

## Privacy Considerations

All data is anonymized before being stored in the database:

1. User IDs are hashed with a salt to create anonymous user IDs.
2. Personal identifiable information (PII) is scrubbed from text data, including:
   - Email addresses
   - Phone numbers
   - URLs
   - Social security numbers
   - Street addresses
   - Names

## Database Schema

The database schema consists of three main tables:

1. **User**: Stores anonymized user IDs.
2. **ResumeEvent**: Stores events related to resume tailoring.
3. **Interaction**: Stores events related to user interactions with the UI.

## Integration

The analytics pipeline is integrated with the main application through the following components:

1. **Logger**: A lightweight client-side helper for logging events.
2. **API Endpoint**: An API endpoint for receiving and processing log events.
3. **Analytics Hooks**: Utility functions for logging specific types of events.

## Usage

To log an event, use the appropriate analytics hook:

\`\`\`typescript
import { logResumeTailoringEvent } from '@/lib/analytics-hooks';

// Log a resume tailoring event
await logResumeTailoringEvent({
  userId: 'user-id',
  resumeId: 'resume-id',
  isRefinement: false,
  resumeText: 'resume text',
  jobDescription: 'job description',
  tailoredText: 'tailored resume text',
  atsScore: 85,
  jdScore: 90,
  tailoringMode: 'personalized',
  version: 1,
});
\`\`\`

For client-side interaction tracking, use the `logInteractionEvent` function:

\`\`\`typescript
import { logInteractionEvent } from '@/lib/analytics-hooks';

// Log an interaction event
await logInteractionEvent({
  userId: 'user-id',
  action: 'click',
  element: 'refine-button',
});
