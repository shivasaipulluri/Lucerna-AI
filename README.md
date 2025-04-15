# Resume Analytics System

This system provides comprehensive analytics tracking for resume-related actions in the application. It includes user activity monitoring, resume tailoring analytics, and usage tracking for free tier limits.

## Components

### Types and Interfaces

Located in `types/analytics.ts`:
- `ResumeEventData`: Defines the structure of resume-related events
- `InteractionData`: Defines user interaction data
- `TailoringAnalyticsData`: Defines analytics data for resume tailoring
- `AnalyticsResult`: Generic type for operation results
- `UserAnalytics`: Tracks user usage statistics
- `TailoringMode`: Available modes for resume tailoring

### Core Analytics Functions

Located in `app/dashboard/actions-with-analytics.ts`:
- `saveResumeWithAnalytics`: Saves a resume with analytics logging
- `runTailoringAnalysisWithAnalytics`: Runs tailoring analysis with analytics and free tier limits

### Model Logger

Located in `lib/model-logger.ts`:
- `logResumeEventDirect`: Logs resume events
- `logInteractionDirect`: Logs user interactions
- `logTailoringAnalyticsDirect`: Logs tailoring analytics
- `hasExceededDailyLimit`: Checks user's daily usage limits
- `incrementDailyUsage`: Updates user's daily usage counts

### Custom Hooks

Located in `hooks/`:
- `useResumeAnalytics`: Hook for resume-related analytics operations
- `useUser`: Hook for user authentication and data

### Error Handling

Located in `components/ErrorBoundary.tsx`:
- `ErrorBoundary`: Component for graceful error handling
- `withErrorBoundary`: HOC for wrapping components with error boundary

## Usage

### Basic Analytics Integration

```typescript
import { useResumeAnalytics } from "@/hooks/useResumeAnalytics"

function YourComponent() {
  const { saveResume, runTailoringAnalysis, isAuthenticated } = useResumeAnalytics()

  async function handleSaveResume(resumeData: Resume) {
    const result = await saveResume(resumeData)
    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  }

  async function handleTailoring(
    resumeId: string,
    resumeText: string,
    jobDescription: string
  ) {
    const result = await runTailoringAnalysis(
      resumeId,
      resumeText,
      jobDescription,
      "basic"
    )
    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  }
}
```

### Error Boundary Usage

```typescript
import { withErrorBoundary } from "@/components/ErrorBoundary"

function YourComponent() {
  // Your component code
}

export default withErrorBoundary(YourComponent)
```

## Free Tier Limits

The system enforces the following daily limits for free tier users:
- Basic Tailorings: 3 per day
- Personalized Tailorings: 1 per day
- Cover Letters: 1 per day

Premium users have unlimited access to all features.

## Database Schema

The analytics data is stored in the following tables:
- `users`: User data and usage tracking
- `resume_events`: Resume-related events
- `interactions`: User interactions
- `tailoring_analytics`: Detailed tailoring analytics
- `resumes`: Resume data
- `saved_resumes`: Saved resume references

## Error Handling

The system includes comprehensive error handling:
- All operations return `AnalyticsResult` with success/error information
- Error boundaries catch and handle component errors
- Failed operations are logged for debugging
- User-friendly error messages are displayed

## Best Practices

1. Always wrap components with error boundaries
2. Use the provided hooks for analytics operations
3. Check authentication status before operations
4. Handle both success and error cases
5. Log meaningful error messages
6. Respect free tier limits
7. Use TypeScript types for type safety

## Contributing

1. Follow the existing code structure
2. Add appropriate error handling
3. Update types as needed
4. Document new features
5. Test thoroughly
6. Update this README with significant changes 