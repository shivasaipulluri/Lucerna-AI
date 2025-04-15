
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  is_premium: 'is_premium',
  tailoring_mode: 'tailoring_mode',
  created_at: 'created_at',
  full_name: 'full_name',
  phone: 'phone',
  country: 'country',
  linkedin: 'linkedin',
  company: 'company',
  position: 'position',
  education: 'education',
  skills: 'skills',
  bio: 'bio',
  subscription_tier: 'subscription_tier',
  subscription_end_date: 'subscription_end_date',
  daily_basic_tailorings_used: 'daily_basic_tailorings_used',
  daily_personalized_tailorings_used: 'daily_personalized_tailorings_used',
  daily_cover_letters_used: 'daily_cover_letters_used',
  daily_linkedin_optimizations_used: 'daily_linkedin_optimizations_used',
  daily_interview_sessions_used: 'daily_interview_sessions_used',
  daily_reset_date: 'daily_reset_date'
};

exports.Prisma.ResumeEventScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  event_type: 'event_type',
  resume_id: 'resume_id',
  resume_text: 'resume_text',
  job_description: 'job_description',
  tailored_text: 'tailored_text',
  ats_score: 'ats_score',
  jd_score: 'jd_score',
  tailoring_mode: 'tailoring_mode',
  version: 'version',
  timestamp: 'timestamp'
};

exports.Prisma.InteractionScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  action: 'action',
  element: 'element',
  timestamp: 'timestamp',
  metadata: 'metadata'
};

exports.Prisma.TailoringAnalyticsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resume_id: 'resume_id',
  tailoring_mode: 'tailoring_mode',
  iterations: 'iterations',
  ats_score: 'ats_score',
  jd_score: 'jd_score',
  golden_passed: 'golden_passed',
  created_at: 'created_at'
};

exports.Prisma.ResumeScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resume_text: 'resume_text',
  job_description: 'job_description',
  modified_resume: 'modified_resume',
  ats_score: 'ats_score',
  jd_score: 'jd_score',
  version: 'version',
  tailoring_mode: 'tailoring_mode',
  created_at: 'created_at'
};

exports.Prisma.CoverLetterScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  original_resume_id: 'original_resume_id',
  job_description: 'job_description',
  generated_letter: 'generated_letter',
  explanation: 'explanation',
  score: 'score',
  feedback: 'feedback',
  golden_passed: 'golden_passed',
  tailoring_mode: 'tailoring_mode',
  version: 'version',
  created_at: 'created_at'
};

exports.Prisma.LinkedinOptimizationScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resume_id: 'resume_id',
  original_text: 'original_text',
  goal: 'goal',
  industry: 'industry',
  tone: 'tone',
  generated_text: 'generated_text',
  job_description: 'job_description',
  tailoring_mode: 'tailoring_mode',
  created_at: 'created_at'
};

exports.Prisma.SavedResumeScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  resume_id: 'resume_id',
  label: 'label',
  created_at: 'created_at'
};

exports.Prisma.InterviewSettingsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  job_title: 'job_title',
  job_description: 'job_description',
  difficulty: 'difficulty',
  mode: 'mode',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  ResumeEvent: 'ResumeEvent',
  Interaction: 'Interaction',
  TailoringAnalytics: 'TailoringAnalytics',
  Resume: 'Resume',
  CoverLetter: 'CoverLetter',
  LinkedinOptimization: 'LinkedinOptimization',
  SavedResume: 'SavedResume',
  InterviewSettings: 'InterviewSettings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
