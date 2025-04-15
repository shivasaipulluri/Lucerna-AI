# Lucerna AI API Endpoints

## Resume Management

### Create Resume
```typescript
POST /api/resumes
Request:
{
  resume_text: string
  job_description: string
  tailoring_mode?: "basic" | "personalized" | "aggressive"
}

Response:
{
  success: boolean
  data?: {
    id: string
    version: number
    created_at: string
  }
  error?: string
}
```

### Get Resume
```typescript
GET /api/resumes/:id
Response:
{
  success: boolean
  data?: {
    id: string
    resume_text: string
    job_description: string
    modified_resume?: string
    ats_score?: number
    jd_score?: number
    version: number
    tailoring_mode: string
    created_at: string
    updated_at: string
  }
  error?: string
}
```

### Update Resume
```typescript
PUT /api/resumes/:id
Request:
{
  resume_text?: string
  job_description?: string
  tailoring_mode?: string
}

Response:
{
  success: boolean
  data?: {
    id: string
    version: number
    updated_at: string
  }
  error?: string
}
```

## Tailoring

### Initial Tailoring
```typescript
POST /api/resumes/:id/tailor
Request:
{
  tailoring_mode?: "basic" | "personalized" | "aggressive"
}

Response:
{
  success: boolean
  data?: {
    modified_resume: string
    ats_score: number
    jd_score: number
    version: number
  }
  error?: string
}
```

### Refine Resume
```typescript
POST /api/resumes/:id/refine
Request:
{
  refinement_type?: "grammar" | "style" | "content"
}

Response:
{
  success: boolean
  data?: {
    modified_resume: string
    ats_score: number
    jd_score: number
    version: number
  }
  error?: string
}
```

## Analytics

### Get Usage Stats
```typescript
GET /api/analytics/usage
Response:
{
  success: boolean
  data?: {
    daily_basic_tailorings_used: number
    daily_personalized_tailorings_used: number
    daily_cover_letters_used: number
    daily_reset_date: string
    limits: {
      basic_tailorings: number
      personalized_tailorings: number
      cover_letters: number
    }
  }
  error?: string
}
```

### Log Event
```typescript
POST /api/analytics/events
Request:
{
  event_type: string
  event_data: {
    resume_id?: string
    action?: string
    element?: string
    metadata?: Record<string, any>
  }
}

Response:
{
  success: boolean
  error?: string
}
```

## User Management

### Get User Preferences
```typescript
GET /api/users/preferences
Response:
{
  success: boolean
  data?: {
    tailoring_mode: string
    is_premium: boolean
    subscription_tier?: string
  }
  error?: string
}
```

### Update User Preferences
```typescript
PUT /api/users/preferences
Request:
{
  tailoring_mode?: string
  subscription_tier?: string
}

Response:
{
  success: boolean
  error?: string
}
```

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |

## Rate Limiting

- Free tier: 3 basic tailorings per day
- Free tier: 1 personalized tailoring per day
- Free tier: 1 cover letter per day
- Premium: Unlimited access to all features

## Authentication

All endpoints require authentication using JWT tokens in the Authorization header:
```
Authorization: Bearer <token>
```

## Response Format

All API responses follow this format:
```typescript
{
  success: boolean
  data?: T
  error?: string
}
```

Where:
- `success`: Indicates if the request was successful
- `data`: Contains the response data (if successful)
- `error`: Contains error message (if unsuccessful) 