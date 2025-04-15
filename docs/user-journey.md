# Lucerna AI User Journey & API Documentation

## User Journey

### 1. Resume Upload & Initial Setup
1. **Dashboard Entry**
   - User lands on dashboard (`/dashboard`)
   - Can view resume history or create new resume
   - Analytics: Logs dashboard view and interaction

2. **New Resume Creation**
   - User clicks "New Resume" button
   - Redirected to upload page
   - Analytics: Logs resume creation attempt

3. **Tailoring Mode Selection**
   - User selects tailoring mode (Basic/Personalized/Aggressive)
   - Mode selection stored in user preferences
   - Analytics: Logs mode selection

### 2. Resume Tailoring Process
1. **Initial Tailoring**
   - Triggered by "Start Tailoring" button
   - Uses `runTailoringAnalysis` function
   - Analytics: Logs tailoring attempt and result

2. **Refinement Process**
   - Available after initial tailoring
   - Uses `RefineResumeButton` component
   - Analytics: Logs refinement attempts and results

3. **Version Control**
   - Each refinement creates new version
   - Version history tracked in database
   - Analytics: Logs version changes

### 3. Preview & Export
1. **Preview Options**
   - View original vs tailored resume
   - Compare versions
   - Analytics: Logs preview interactions

2. **Export Options**
   - Copy to clipboard
   - Download as text
   - Print directly
   - Analytics: Logs export actions

## API Structure

### 1. Resume Management APIs
```typescript
// Resume Creation
POST /api/resumes
- Creates new resume
- Returns resume ID
- Logs creation event

// Resume Retrieval
GET /api/resumes/:id
- Gets resume details
- Includes version history
- Logs view event

// Resume Update
PUT /api/resumes/:id
- Updates resume content
- Creates new version
- Logs update event
```

### 2. Tailoring APIs
```typescript
// Initial Tailoring
POST /api/resumes/:id/tailor
- Runs initial tailoring
- Checks user limits
- Logs tailoring event

// Refinement
POST /api/resumes/:id/refine
- Runs refinement
- Creates new version
- Logs refinement event
```

### 3. Analytics APIs
```typescript
// Usage Tracking
GET /api/analytics/usage
- Returns user's daily usage
- Includes limits and remaining

// Event Logging
POST /api/analytics/events
- Logs user interactions
- Tracks feature usage
```

## Component Structure

### 1. Core Components
```typescript
// ResumeLabClient
- Main resume editing interface
- Handles tailoring and refinement
- Manages version display

// TailoredPreview
- Preview interface
- Export functionality
- Version comparison

// RefineResumeButton
- Handles refinement process
- Manages refinement state
- Shows progress feedback
```

### 2. Analytics Components
```typescript
// useResumeAnalytics
- Hook for analytics operations
- Manages event logging
- Handles usage tracking

// ErrorBoundary
- Catches and handles errors
- Provides fallback UI
- Logs error events
```

## Best Practices

1. **Error Handling**
   - Use ErrorBoundary for all components
   - Provide meaningful error messages
   - Log errors for debugging

2. **Analytics**
   - Log all user interactions
   - Track feature usage
   - Monitor performance

3. **Performance**
   - Optimize API calls
   - Cache where appropriate
   - Use loading states

4. **Security**
   - Validate all inputs
   - Check user permissions
   - Protect sensitive data

## Future Improvements

1. **Enhanced Analytics**
   - Add more detailed tracking
   - Improve error logging
   - Add performance metrics

2. **User Experience**
   - Add more customization options
   - Improve feedback mechanisms
   - Enhance version comparison

3. **API Enhancements**
   - Add batch operations
   - Improve error handling
   - Add rate limiting 