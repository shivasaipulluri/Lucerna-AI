
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model CoverLetter
 * 
 */
export type CoverLetter = $Result.DefaultSelection<Prisma.$CoverLetterPayload>
/**
 * Model LinkedinOptimization
 * 
 */
export type LinkedinOptimization = $Result.DefaultSelection<Prisma.$LinkedinOptimizationPayload>
/**
 * Model SavedResume
 * 
 */
export type SavedResume = $Result.DefaultSelection<Prisma.$SavedResumePayload>
/**
 * Model TailoringAnalytics
 * 
 */
export type TailoringAnalytics = $Result.DefaultSelection<Prisma.$TailoringAnalyticsPayload>
/**
 * Model InterviewSettings
 * 
 */
export type InterviewSettings = $Result.DefaultSelection<Prisma.$InterviewSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverLetter`: Exposes CRUD operations for the **CoverLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverLetters
    * const coverLetters = await prisma.coverLetter.findMany()
    * ```
    */
  get coverLetter(): Prisma.CoverLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedinOptimization`: Exposes CRUD operations for the **LinkedinOptimization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedinOptimizations
    * const linkedinOptimizations = await prisma.linkedinOptimization.findMany()
    * ```
    */
  get linkedinOptimization(): Prisma.LinkedinOptimizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedResume`: Exposes CRUD operations for the **SavedResume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedResumes
    * const savedResumes = await prisma.savedResume.findMany()
    * ```
    */
  get savedResume(): Prisma.SavedResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tailoringAnalytics`: Exposes CRUD operations for the **TailoringAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TailoringAnalytics
    * const tailoringAnalytics = await prisma.tailoringAnalytics.findMany()
    * ```
    */
  get tailoringAnalytics(): Prisma.TailoringAnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewSettings`: Exposes CRUD operations for the **InterviewSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewSettings
    * const interviewSettings = await prisma.interviewSettings.findMany()
    * ```
    */
  get interviewSettings(): Prisma.InterviewSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    CoverLetter: 'CoverLetter',
    LinkedinOptimization: 'LinkedinOptimization',
    SavedResume: 'SavedResume',
    TailoringAnalytics: 'TailoringAnalytics',
    InterviewSettings: 'InterviewSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "coverLetter" | "linkedinOptimization" | "savedResume" | "tailoringAnalytics" | "interviewSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      CoverLetter: {
        payload: Prisma.$CoverLetterPayload<ExtArgs>
        fields: Prisma.CoverLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findFirst: {
            args: Prisma.CoverLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          findMany: {
            args: Prisma.CoverLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          create: {
            args: Prisma.CoverLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          createMany: {
            args: Prisma.CoverLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          delete: {
            args: Prisma.CoverLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          update: {
            args: Prisma.CoverLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          deleteMany: {
            args: Prisma.CoverLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>[]
          }
          upsert: {
            args: Prisma.CoverLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverLetterPayload>
          }
          aggregate: {
            args: Prisma.CoverLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverLetter>
          }
          groupBy: {
            args: Prisma.CoverLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverLetterCountArgs<ExtArgs>
            result: $Utils.Optional<CoverLetterCountAggregateOutputType> | number
          }
        }
      }
      LinkedinOptimization: {
        payload: Prisma.$LinkedinOptimizationPayload<ExtArgs>
        fields: Prisma.LinkedinOptimizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedinOptimizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedinOptimizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          findFirst: {
            args: Prisma.LinkedinOptimizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedinOptimizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          findMany: {
            args: Prisma.LinkedinOptimizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>[]
          }
          create: {
            args: Prisma.LinkedinOptimizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          createMany: {
            args: Prisma.LinkedinOptimizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedinOptimizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>[]
          }
          delete: {
            args: Prisma.LinkedinOptimizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          update: {
            args: Prisma.LinkedinOptimizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          deleteMany: {
            args: Prisma.LinkedinOptimizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedinOptimizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedinOptimizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>[]
          }
          upsert: {
            args: Prisma.LinkedinOptimizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedinOptimizationPayload>
          }
          aggregate: {
            args: Prisma.LinkedinOptimizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedinOptimization>
          }
          groupBy: {
            args: Prisma.LinkedinOptimizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedinOptimizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedinOptimizationCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedinOptimizationCountAggregateOutputType> | number
          }
        }
      }
      SavedResume: {
        payload: Prisma.$SavedResumePayload<ExtArgs>
        fields: Prisma.SavedResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          findFirst: {
            args: Prisma.SavedResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          findMany: {
            args: Prisma.SavedResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>[]
          }
          create: {
            args: Prisma.SavedResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          createMany: {
            args: Prisma.SavedResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>[]
          }
          delete: {
            args: Prisma.SavedResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          update: {
            args: Prisma.SavedResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          deleteMany: {
            args: Prisma.SavedResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>[]
          }
          upsert: {
            args: Prisma.SavedResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedResumePayload>
          }
          aggregate: {
            args: Prisma.SavedResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedResume>
          }
          groupBy: {
            args: Prisma.SavedResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedResumeCountArgs<ExtArgs>
            result: $Utils.Optional<SavedResumeCountAggregateOutputType> | number
          }
        }
      }
      TailoringAnalytics: {
        payload: Prisma.$TailoringAnalyticsPayload<ExtArgs>
        fields: Prisma.TailoringAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TailoringAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TailoringAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.TailoringAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TailoringAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          findMany: {
            args: Prisma.TailoringAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>[]
          }
          create: {
            args: Prisma.TailoringAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          createMany: {
            args: Prisma.TailoringAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TailoringAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.TailoringAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          update: {
            args: Prisma.TailoringAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.TailoringAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TailoringAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TailoringAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.TailoringAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TailoringAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.TailoringAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTailoringAnalytics>
          }
          groupBy: {
            args: Prisma.TailoringAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TailoringAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TailoringAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<TailoringAnalyticsCountAggregateOutputType> | number
          }
        }
      }
      InterviewSettings: {
        payload: Prisma.$InterviewSettingsPayload<ExtArgs>
        fields: Prisma.InterviewSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          findFirst: {
            args: Prisma.InterviewSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          findMany: {
            args: Prisma.InterviewSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>[]
          }
          create: {
            args: Prisma.InterviewSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          createMany: {
            args: Prisma.InterviewSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>[]
          }
          delete: {
            args: Prisma.InterviewSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          update: {
            args: Prisma.InterviewSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          deleteMany: {
            args: Prisma.InterviewSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>[]
          }
          upsert: {
            args: Prisma.InterviewSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSettingsPayload>
          }
          aggregate: {
            args: Prisma.InterviewSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewSettings>
          }
          groupBy: {
            args: Prisma.InterviewSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    coverLetter?: CoverLetterOmit
    linkedinOptimization?: LinkedinOptimizationOmit
    savedResume?: SavedResumeOmit
    tailoringAnalytics?: TailoringAnalyticsOmit
    interviewSettings?: InterviewSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumes: number
    coverLetters: number
    linkedinOptimizations: number
    savedResumes: number
    tailoringAnalytics: number
    interviewSettings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    coverLetters?: boolean | UserCountOutputTypeCountCoverLettersArgs
    linkedinOptimizations?: boolean | UserCountOutputTypeCountLinkedinOptimizationsArgs
    savedResumes?: boolean | UserCountOutputTypeCountSavedResumesArgs
    tailoringAnalytics?: boolean | UserCountOutputTypeCountTailoringAnalyticsArgs
    interviewSettings?: boolean | UserCountOutputTypeCountInterviewSettingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedinOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedinOptimizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTailoringAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TailoringAnalyticsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterviewSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewSettingsWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    coverLetters: number
    linkedinOptimizations: number
    savedResumes: number
    tailoringAnalytics: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverLetters?: boolean | ResumeCountOutputTypeCountCoverLettersArgs
    linkedinOptimizations?: boolean | ResumeCountOutputTypeCountLinkedinOptimizationsArgs
    savedResumes?: boolean | ResumeCountOutputTypeCountSavedResumesArgs
    tailoringAnalytics?: boolean | ResumeCountOutputTypeCountTailoringAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountCoverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountLinkedinOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedinOptimizationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSavedResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedResumeWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountTailoringAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TailoringAnalyticsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_linkedin_optimizations_used: number | null
    daily_interview_sessions_used: number | null
  }

  export type UserSumAggregateOutputType = {
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_linkedin_optimizations_used: number | null
    daily_interview_sessions_used: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    is_premium: boolean | null
    tailoring_mode: string | null
    created_at: Date | null
    full_name: string | null
    phone: string | null
    country: string | null
    linkedin: string | null
    company: string | null
    position: string | null
    education: string | null
    skills: string | null
    bio: string | null
    subscription_tier: string | null
    subscription_end_date: Date | null
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_linkedin_optimizations_used: number | null
    daily_interview_sessions_used: number | null
    daily_reset_date: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    is_premium: boolean | null
    tailoring_mode: string | null
    created_at: Date | null
    full_name: string | null
    phone: string | null
    country: string | null
    linkedin: string | null
    company: string | null
    position: string | null
    education: string | null
    skills: string | null
    bio: string | null
    subscription_tier: string | null
    subscription_end_date: Date | null
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_linkedin_optimizations_used: number | null
    daily_interview_sessions_used: number | null
    daily_reset_date: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    is_premium: number
    tailoring_mode: number
    created_at: number
    full_name: number
    phone: number
    country: number
    linkedin: number
    company: number
    position: number
    education: number
    skills: number
    bio: number
    subscription_tier: number
    subscription_end_date: number
    daily_basic_tailorings_used: number
    daily_personalized_tailorings_used: number
    daily_cover_letters_used: number
    daily_linkedin_optimizations_used: number
    daily_interview_sessions_used: number
    daily_reset_date: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_linkedin_optimizations_used?: true
    daily_interview_sessions_used?: true
  }

  export type UserSumAggregateInputType = {
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_linkedin_optimizations_used?: true
    daily_interview_sessions_used?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    is_premium?: true
    tailoring_mode?: true
    created_at?: true
    full_name?: true
    phone?: true
    country?: true
    linkedin?: true
    company?: true
    position?: true
    education?: true
    skills?: true
    bio?: true
    subscription_tier?: true
    subscription_end_date?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_linkedin_optimizations_used?: true
    daily_interview_sessions_used?: true
    daily_reset_date?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    is_premium?: true
    tailoring_mode?: true
    created_at?: true
    full_name?: true
    phone?: true
    country?: true
    linkedin?: true
    company?: true
    position?: true
    education?: true
    skills?: true
    bio?: true
    subscription_tier?: true
    subscription_end_date?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_linkedin_optimizations_used?: true
    daily_interview_sessions_used?: true
    daily_reset_date?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    is_premium?: true
    tailoring_mode?: true
    created_at?: true
    full_name?: true
    phone?: true
    country?: true
    linkedin?: true
    company?: true
    position?: true
    education?: true
    skills?: true
    bio?: true
    subscription_tier?: true
    subscription_end_date?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_linkedin_optimizations_used?: true
    daily_interview_sessions_used?: true
    daily_reset_date?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    is_premium: boolean
    tailoring_mode: string | null
    created_at: Date
    full_name: string | null
    phone: string | null
    country: string | null
    linkedin: string | null
    company: string | null
    position: string | null
    education: string | null
    skills: string | null
    bio: string | null
    subscription_tier: string | null
    subscription_end_date: Date | null
    daily_basic_tailorings_used: number
    daily_personalized_tailorings_used: number
    daily_cover_letters_used: number
    daily_linkedin_optimizations_used: number
    daily_interview_sessions_used: number
    daily_reset_date: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_premium?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    linkedin?: boolean
    company?: boolean
    position?: boolean
    education?: boolean
    skills?: boolean
    bio?: boolean
    subscription_tier?: boolean
    subscription_end_date?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_linkedin_optimizations_used?: boolean
    daily_interview_sessions_used?: boolean
    daily_reset_date?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    coverLetters?: boolean | User$coverLettersArgs<ExtArgs>
    linkedinOptimizations?: boolean | User$linkedinOptimizationsArgs<ExtArgs>
    savedResumes?: boolean | User$savedResumesArgs<ExtArgs>
    tailoringAnalytics?: boolean | User$tailoringAnalyticsArgs<ExtArgs>
    interviewSettings?: boolean | User$interviewSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_premium?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    linkedin?: boolean
    company?: boolean
    position?: boolean
    education?: boolean
    skills?: boolean
    bio?: boolean
    subscription_tier?: boolean
    subscription_end_date?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_linkedin_optimizations_used?: boolean
    daily_interview_sessions_used?: boolean
    daily_reset_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    is_premium?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    linkedin?: boolean
    company?: boolean
    position?: boolean
    education?: boolean
    skills?: boolean
    bio?: boolean
    subscription_tier?: boolean
    subscription_end_date?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_linkedin_optimizations_used?: boolean
    daily_interview_sessions_used?: boolean
    daily_reset_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    is_premium?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    full_name?: boolean
    phone?: boolean
    country?: boolean
    linkedin?: boolean
    company?: boolean
    position?: boolean
    education?: boolean
    skills?: boolean
    bio?: boolean
    subscription_tier?: boolean
    subscription_end_date?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_linkedin_optimizations_used?: boolean
    daily_interview_sessions_used?: boolean
    daily_reset_date?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "is_premium" | "tailoring_mode" | "created_at" | "full_name" | "phone" | "country" | "linkedin" | "company" | "position" | "education" | "skills" | "bio" | "subscription_tier" | "subscription_end_date" | "daily_basic_tailorings_used" | "daily_personalized_tailorings_used" | "daily_cover_letters_used" | "daily_linkedin_optimizations_used" | "daily_interview_sessions_used" | "daily_reset_date", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    coverLetters?: boolean | User$coverLettersArgs<ExtArgs>
    linkedinOptimizations?: boolean | User$linkedinOptimizationsArgs<ExtArgs>
    savedResumes?: boolean | User$savedResumesArgs<ExtArgs>
    tailoringAnalytics?: boolean | User$tailoringAnalyticsArgs<ExtArgs>
    interviewSettings?: boolean | User$interviewSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      coverLetters: Prisma.$CoverLetterPayload<ExtArgs>[]
      linkedinOptimizations: Prisma.$LinkedinOptimizationPayload<ExtArgs>[]
      savedResumes: Prisma.$SavedResumePayload<ExtArgs>[]
      tailoringAnalytics: Prisma.$TailoringAnalyticsPayload<ExtArgs>[]
      interviewSettings: Prisma.$InterviewSettingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      is_premium: boolean
      tailoring_mode: string | null
      created_at: Date
      full_name: string | null
      phone: string | null
      country: string | null
      linkedin: string | null
      company: string | null
      position: string | null
      education: string | null
      skills: string | null
      bio: string | null
      subscription_tier: string | null
      subscription_end_date: Date | null
      daily_basic_tailorings_used: number
      daily_personalized_tailorings_used: number
      daily_cover_letters_used: number
      daily_linkedin_optimizations_used: number
      daily_interview_sessions_used: number
      daily_reset_date: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coverLetters<T extends User$coverLettersArgs<ExtArgs> = {}>(args?: Subset<T, User$coverLettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedinOptimizations<T extends User$linkedinOptimizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedinOptimizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedResumes<T extends User$savedResumesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedResumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tailoringAnalytics<T extends User$tailoringAnalyticsArgs<ExtArgs> = {}>(args?: Subset<T, User$tailoringAnalyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewSettings<T extends User$interviewSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$interviewSettingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly is_premium: FieldRef<"User", 'Boolean'>
    readonly tailoring_mode: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly linkedin: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly education: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly subscription_tier: FieldRef<"User", 'String'>
    readonly subscription_end_date: FieldRef<"User", 'DateTime'>
    readonly daily_basic_tailorings_used: FieldRef<"User", 'Int'>
    readonly daily_personalized_tailorings_used: FieldRef<"User", 'Int'>
    readonly daily_cover_letters_used: FieldRef<"User", 'Int'>
    readonly daily_linkedin_optimizations_used: FieldRef<"User", 'Int'>
    readonly daily_interview_sessions_used: FieldRef<"User", 'Int'>
    readonly daily_reset_date: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User.coverLetters
   */
  export type User$coverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    cursor?: CoverLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * User.linkedinOptimizations
   */
  export type User$linkedinOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    where?: LinkedinOptimizationWhereInput
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    cursor?: LinkedinOptimizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedinOptimizationScalarFieldEnum | LinkedinOptimizationScalarFieldEnum[]
  }

  /**
   * User.savedResumes
   */
  export type User$savedResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    where?: SavedResumeWhereInput
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    cursor?: SavedResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedResumeScalarFieldEnum | SavedResumeScalarFieldEnum[]
  }

  /**
   * User.tailoringAnalytics
   */
  export type User$tailoringAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    where?: TailoringAnalyticsWhereInput
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    cursor?: TailoringAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TailoringAnalyticsScalarFieldEnum | TailoringAnalyticsScalarFieldEnum[]
  }

  /**
   * User.interviewSettings
   */
  export type User$interviewSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    where?: InterviewSettingsWhereInput
    orderBy?: InterviewSettingsOrderByWithRelationInput | InterviewSettingsOrderByWithRelationInput[]
    cursor?: InterviewSettingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewSettingsScalarFieldEnum | InterviewSettingsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    ats_score: number | null
    jd_score: number | null
    version: number | null
  }

  export type ResumeSumAggregateOutputType = {
    ats_score: number | null
    jd_score: number | null
    version: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_text: string | null
    job_description: string | null
    modified_resume: string | null
    ats_score: number | null
    jd_score: number | null
    version: number | null
    tailoring_mode: string | null
    created_at: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_text: string | null
    job_description: string | null
    modified_resume: string | null
    ats_score: number | null
    jd_score: number | null
    version: number | null
    tailoring_mode: string | null
    created_at: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    user_id: number
    resume_text: number
    job_description: number
    modified_resume: number
    ats_score: number
    jd_score: number
    version: number
    tailoring_mode: number
    created_at: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    ats_score?: true
    jd_score?: true
    version?: true
  }

  export type ResumeSumAggregateInputType = {
    ats_score?: true
    jd_score?: true
    version?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_text?: true
    job_description?: true
    modified_resume?: true
    ats_score?: true
    jd_score?: true
    version?: true
    tailoring_mode?: true
    created_at?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_text?: true
    job_description?: true
    modified_resume?: true
    ats_score?: true
    jd_score?: true
    version?: true
    tailoring_mode?: true
    created_at?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_text?: true
    job_description?: true
    modified_resume?: true
    ats_score?: true
    jd_score?: true
    version?: true
    tailoring_mode?: true
    created_at?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume: string | null
    ats_score: number | null
    jd_score: number | null
    version: number
    tailoring_mode: string | null
    created_at: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    modified_resume?: boolean
    ats_score?: boolean
    jd_score?: boolean
    version?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coverLetters?: boolean | Resume$coverLettersArgs<ExtArgs>
    linkedinOptimizations?: boolean | Resume$linkedinOptimizationsArgs<ExtArgs>
    savedResumes?: boolean | Resume$savedResumesArgs<ExtArgs>
    tailoringAnalytics?: boolean | Resume$tailoringAnalyticsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    modified_resume?: boolean
    ats_score?: boolean
    jd_score?: boolean
    version?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    modified_resume?: boolean
    ats_score?: boolean
    jd_score?: boolean
    version?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    modified_resume?: boolean
    ats_score?: boolean
    jd_score?: boolean
    version?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_text" | "job_description" | "modified_resume" | "ats_score" | "jd_score" | "version" | "tailoring_mode" | "created_at", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coverLetters?: boolean | Resume$coverLettersArgs<ExtArgs>
    linkedinOptimizations?: boolean | Resume$linkedinOptimizationsArgs<ExtArgs>
    savedResumes?: boolean | Resume$savedResumesArgs<ExtArgs>
    tailoringAnalytics?: boolean | Resume$tailoringAnalyticsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coverLetters: Prisma.$CoverLetterPayload<ExtArgs>[]
      linkedinOptimizations: Prisma.$LinkedinOptimizationPayload<ExtArgs>[]
      savedResumes: Prisma.$SavedResumePayload<ExtArgs>[]
      tailoringAnalytics: Prisma.$TailoringAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_text: string
      job_description: string
      modified_resume: string | null
      ats_score: number | null
      jd_score: number | null
      version: number
      tailoring_mode: string | null
      created_at: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coverLetters<T extends Resume$coverLettersArgs<ExtArgs> = {}>(args?: Subset<T, Resume$coverLettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedinOptimizations<T extends Resume$linkedinOptimizationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$linkedinOptimizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedResumes<T extends Resume$savedResumesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$savedResumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tailoringAnalytics<T extends Resume$tailoringAnalyticsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$tailoringAnalyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly user_id: FieldRef<"Resume", 'String'>
    readonly resume_text: FieldRef<"Resume", 'String'>
    readonly job_description: FieldRef<"Resume", 'String'>
    readonly modified_resume: FieldRef<"Resume", 'String'>
    readonly ats_score: FieldRef<"Resume", 'Int'>
    readonly jd_score: FieldRef<"Resume", 'Int'>
    readonly version: FieldRef<"Resume", 'Int'>
    readonly tailoring_mode: FieldRef<"Resume", 'String'>
    readonly created_at: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.coverLetters
   */
  export type Resume$coverLettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    cursor?: CoverLetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * Resume.linkedinOptimizations
   */
  export type Resume$linkedinOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    where?: LinkedinOptimizationWhereInput
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    cursor?: LinkedinOptimizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedinOptimizationScalarFieldEnum | LinkedinOptimizationScalarFieldEnum[]
  }

  /**
   * Resume.savedResumes
   */
  export type Resume$savedResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    where?: SavedResumeWhereInput
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    cursor?: SavedResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedResumeScalarFieldEnum | SavedResumeScalarFieldEnum[]
  }

  /**
   * Resume.tailoringAnalytics
   */
  export type Resume$tailoringAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    where?: TailoringAnalyticsWhereInput
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    cursor?: TailoringAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TailoringAnalyticsScalarFieldEnum | TailoringAnalyticsScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model CoverLetter
   */

  export type AggregateCoverLetter = {
    _count: CoverLetterCountAggregateOutputType | null
    _avg: CoverLetterAvgAggregateOutputType | null
    _sum: CoverLetterSumAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  export type CoverLetterAvgAggregateOutputType = {
    score: number | null
    version: number | null
  }

  export type CoverLetterSumAggregateOutputType = {
    score: number | null
    version: number | null
  }

  export type CoverLetterMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    original_resume_id: string | null
    job_description: string | null
    generated_letter: string | null
    explanation: string | null
    score: number | null
    feedback: string | null
    golden_passed: boolean | null
    tailoring_mode: string | null
    version: number | null
    created_at: Date | null
  }

  export type CoverLetterMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    original_resume_id: string | null
    job_description: string | null
    generated_letter: string | null
    explanation: string | null
    score: number | null
    feedback: string | null
    golden_passed: boolean | null
    tailoring_mode: string | null
    version: number | null
    created_at: Date | null
  }

  export type CoverLetterCountAggregateOutputType = {
    id: number
    user_id: number
    original_resume_id: number
    job_description: number
    generated_letter: number
    explanation: number
    score: number
    feedback: number
    golden_passed: number
    tailoring_mode: number
    version: number
    created_at: number
    _all: number
  }


  export type CoverLetterAvgAggregateInputType = {
    score?: true
    version?: true
  }

  export type CoverLetterSumAggregateInputType = {
    score?: true
    version?: true
  }

  export type CoverLetterMinAggregateInputType = {
    id?: true
    user_id?: true
    original_resume_id?: true
    job_description?: true
    generated_letter?: true
    explanation?: true
    score?: true
    feedback?: true
    golden_passed?: true
    tailoring_mode?: true
    version?: true
    created_at?: true
  }

  export type CoverLetterMaxAggregateInputType = {
    id?: true
    user_id?: true
    original_resume_id?: true
    job_description?: true
    generated_letter?: true
    explanation?: true
    score?: true
    feedback?: true
    golden_passed?: true
    tailoring_mode?: true
    version?: true
    created_at?: true
  }

  export type CoverLetterCountAggregateInputType = {
    id?: true
    user_id?: true
    original_resume_id?: true
    job_description?: true
    generated_letter?: true
    explanation?: true
    score?: true
    feedback?: true
    golden_passed?: true
    tailoring_mode?: true
    version?: true
    created_at?: true
    _all?: true
  }

  export type CoverLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetter to aggregate.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverLetters
    **/
    _count?: true | CoverLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverLetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverLetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverLetterMaxAggregateInputType
  }

  export type GetCoverLetterAggregateType<T extends CoverLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverLetter[P]>
      : GetScalarType<T[P], AggregateCoverLetter[P]>
  }




  export type CoverLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverLetterWhereInput
    orderBy?: CoverLetterOrderByWithAggregationInput | CoverLetterOrderByWithAggregationInput[]
    by: CoverLetterScalarFieldEnum[] | CoverLetterScalarFieldEnum
    having?: CoverLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverLetterCountAggregateInputType | true
    _avg?: CoverLetterAvgAggregateInputType
    _sum?: CoverLetterSumAggregateInputType
    _min?: CoverLetterMinAggregateInputType
    _max?: CoverLetterMaxAggregateInputType
  }

  export type CoverLetterGroupByOutputType = {
    id: string
    user_id: string
    original_resume_id: string
    job_description: string
    generated_letter: string
    explanation: string | null
    score: number | null
    feedback: string | null
    golden_passed: boolean | null
    tailoring_mode: string
    version: number
    created_at: Date
    _count: CoverLetterCountAggregateOutputType | null
    _avg: CoverLetterAvgAggregateOutputType | null
    _sum: CoverLetterSumAggregateOutputType | null
    _min: CoverLetterMinAggregateOutputType | null
    _max: CoverLetterMaxAggregateOutputType | null
  }

  type GetCoverLetterGroupByPayload<T extends CoverLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
            : GetScalarType<T[P], CoverLetterGroupByOutputType[P]>
        }
      >
    >


  export type CoverLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    original_resume_id?: boolean
    job_description?: boolean
    generated_letter?: boolean
    explanation?: boolean
    score?: boolean
    feedback?: boolean
    golden_passed?: boolean
    tailoring_mode?: boolean
    version?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    original_resume_id?: boolean
    job_description?: boolean
    generated_letter?: boolean
    explanation?: boolean
    score?: boolean
    feedback?: boolean
    golden_passed?: boolean
    tailoring_mode?: boolean
    version?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    original_resume_id?: boolean
    job_description?: boolean
    generated_letter?: boolean
    explanation?: boolean
    score?: boolean
    feedback?: boolean
    golden_passed?: boolean
    tailoring_mode?: boolean
    version?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverLetter"]>

  export type CoverLetterSelectScalar = {
    id?: boolean
    user_id?: boolean
    original_resume_id?: boolean
    job_description?: boolean
    generated_letter?: boolean
    explanation?: boolean
    score?: boolean
    feedback?: boolean
    golden_passed?: boolean
    tailoring_mode?: boolean
    version?: boolean
    created_at?: boolean
  }

  export type CoverLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "original_resume_id" | "job_description" | "generated_letter" | "explanation" | "score" | "feedback" | "golden_passed" | "tailoring_mode" | "version" | "created_at", ExtArgs["result"]["coverLetter"]>
  export type CoverLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type CoverLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $CoverLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverLetter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      original_resume_id: string
      job_description: string
      generated_letter: string
      explanation: string | null
      score: number | null
      feedback: string | null
      golden_passed: boolean | null
      tailoring_mode: string
      version: number
      created_at: Date
    }, ExtArgs["result"]["coverLetter"]>
    composites: {}
  }

  type CoverLetterGetPayload<S extends boolean | null | undefined | CoverLetterDefaultArgs> = $Result.GetResult<Prisma.$CoverLetterPayload, S>

  type CoverLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverLetterCountAggregateInputType | true
    }

  export interface CoverLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverLetter'], meta: { name: 'CoverLetter' } }
    /**
     * Find zero or one CoverLetter that matches the filter.
     * @param {CoverLetterFindUniqueArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverLetterFindUniqueArgs>(args: SelectSubset<T, CoverLetterFindUniqueArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverLetterFindUniqueOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverLetterFindFirstArgs>(args?: SelectSubset<T, CoverLetterFindFirstArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindFirstOrThrowArgs} args - Arguments to find a CoverLetter
     * @example
     * // Get one CoverLetter
     * const coverLetter = await prisma.coverLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany()
     * 
     * // Get first 10 CoverLetters
     * const coverLetters = await prisma.coverLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverLetterFindManyArgs>(args?: SelectSubset<T, CoverLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverLetter.
     * @param {CoverLetterCreateArgs} args - Arguments to create a CoverLetter.
     * @example
     * // Create one CoverLetter
     * const CoverLetter = await prisma.coverLetter.create({
     *   data: {
     *     // ... data to create a CoverLetter
     *   }
     * })
     * 
     */
    create<T extends CoverLetterCreateArgs>(args: SelectSubset<T, CoverLetterCreateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverLetters.
     * @param {CoverLetterCreateManyArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverLetterCreateManyArgs>(args?: SelectSubset<T, CoverLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverLetters and returns the data saved in the database.
     * @param {CoverLetterCreateManyAndReturnArgs} args - Arguments to create many CoverLetters.
     * @example
     * // Create many CoverLetters
     * const coverLetter = await prisma.coverLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverLetter.
     * @param {CoverLetterDeleteArgs} args - Arguments to delete one CoverLetter.
     * @example
     * // Delete one CoverLetter
     * const CoverLetter = await prisma.coverLetter.delete({
     *   where: {
     *     // ... filter to delete one CoverLetter
     *   }
     * })
     * 
     */
    delete<T extends CoverLetterDeleteArgs>(args: SelectSubset<T, CoverLetterDeleteArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverLetter.
     * @param {CoverLetterUpdateArgs} args - Arguments to update one CoverLetter.
     * @example
     * // Update one CoverLetter
     * const coverLetter = await prisma.coverLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverLetterUpdateArgs>(args: SelectSubset<T, CoverLetterUpdateArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverLetters.
     * @param {CoverLetterDeleteManyArgs} args - Arguments to filter CoverLetters to delete.
     * @example
     * // Delete a few CoverLetters
     * const { count } = await prisma.coverLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverLetterDeleteManyArgs>(args?: SelectSubset<T, CoverLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverLetterUpdateManyArgs>(args: SelectSubset<T, CoverLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverLetters and returns the data updated in the database.
     * @param {CoverLetterUpdateManyAndReturnArgs} args - Arguments to update many CoverLetters.
     * @example
     * // Update many CoverLetters
     * const coverLetter = await prisma.coverLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverLetters and only return the `id`
     * const coverLetterWithIdOnly = await prisma.coverLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoverLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverLetter.
     * @param {CoverLetterUpsertArgs} args - Arguments to update or create a CoverLetter.
     * @example
     * // Update or create a CoverLetter
     * const coverLetter = await prisma.coverLetter.upsert({
     *   create: {
     *     // ... data to create a CoverLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverLetter we want to update
     *   }
     * })
     */
    upsert<T extends CoverLetterUpsertArgs>(args: SelectSubset<T, CoverLetterUpsertArgs<ExtArgs>>): Prisma__CoverLetterClient<$Result.GetResult<Prisma.$CoverLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterCountArgs} args - Arguments to filter CoverLetters to count.
     * @example
     * // Count the number of CoverLetters
     * const count = await prisma.coverLetter.count({
     *   where: {
     *     // ... the filter for the CoverLetters we want to count
     *   }
     * })
    **/
    count<T extends CoverLetterCountArgs>(
      args?: Subset<T, CoverLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoverLetterAggregateArgs>(args: Subset<T, CoverLetterAggregateArgs>): Prisma.PrismaPromise<GetCoverLetterAggregateType<T>>

    /**
     * Group by CoverLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverLetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoverLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverLetterGroupByArgs['orderBy'] }
        : { orderBy?: CoverLetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoverLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverLetter model
   */
  readonly fields: CoverLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoverLetter model
   */
  interface CoverLetterFieldRefs {
    readonly id: FieldRef<"CoverLetter", 'String'>
    readonly user_id: FieldRef<"CoverLetter", 'String'>
    readonly original_resume_id: FieldRef<"CoverLetter", 'String'>
    readonly job_description: FieldRef<"CoverLetter", 'String'>
    readonly generated_letter: FieldRef<"CoverLetter", 'String'>
    readonly explanation: FieldRef<"CoverLetter", 'String'>
    readonly score: FieldRef<"CoverLetter", 'Int'>
    readonly feedback: FieldRef<"CoverLetter", 'String'>
    readonly golden_passed: FieldRef<"CoverLetter", 'Boolean'>
    readonly tailoring_mode: FieldRef<"CoverLetter", 'String'>
    readonly version: FieldRef<"CoverLetter", 'Int'>
    readonly created_at: FieldRef<"CoverLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoverLetter findUnique
   */
  export type CoverLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findUniqueOrThrow
   */
  export type CoverLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter findFirst
   */
  export type CoverLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findFirstOrThrow
   */
  export type CoverLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetter to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverLetters.
     */
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter findMany
   */
  export type CoverLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter, which CoverLetters to fetch.
     */
    where?: CoverLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverLetters to fetch.
     */
    orderBy?: CoverLetterOrderByWithRelationInput | CoverLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverLetters.
     */
    cursor?: CoverLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverLetters.
     */
    skip?: number
    distinct?: CoverLetterScalarFieldEnum | CoverLetterScalarFieldEnum[]
  }

  /**
   * CoverLetter create
   */
  export type CoverLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverLetter.
     */
    data: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
  }

  /**
   * CoverLetter createMany
   */
  export type CoverLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverLetter createManyAndReturn
   */
  export type CoverLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to create many CoverLetters.
     */
    data: CoverLetterCreateManyInput | CoverLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter update
   */
  export type CoverLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverLetter.
     */
    data: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
    /**
     * Choose, which CoverLetter to update.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter updateMany
   */
  export type CoverLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
  }

  /**
   * CoverLetter updateManyAndReturn
   */
  export type CoverLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * The data used to update CoverLetters.
     */
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyInput>
    /**
     * Filter which CoverLetters to update
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverLetter upsert
   */
  export type CoverLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverLetter to update in case it exists.
     */
    where: CoverLetterWhereUniqueInput
    /**
     * In case the CoverLetter found by the `where` argument doesn't exist, create a new CoverLetter with this data.
     */
    create: XOR<CoverLetterCreateInput, CoverLetterUncheckedCreateInput>
    /**
     * In case the CoverLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverLetterUpdateInput, CoverLetterUncheckedUpdateInput>
  }

  /**
   * CoverLetter delete
   */
  export type CoverLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
    /**
     * Filter which CoverLetter to delete.
     */
    where: CoverLetterWhereUniqueInput
  }

  /**
   * CoverLetter deleteMany
   */
  export type CoverLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverLetters to delete
     */
    where?: CoverLetterWhereInput
    /**
     * Limit how many CoverLetters to delete.
     */
    limit?: number
  }

  /**
   * CoverLetter without action
   */
  export type CoverLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverLetter
     */
    select?: CoverLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverLetter
     */
    omit?: CoverLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverLetterInclude<ExtArgs> | null
  }


  /**
   * Model LinkedinOptimization
   */

  export type AggregateLinkedinOptimization = {
    _count: LinkedinOptimizationCountAggregateOutputType | null
    _min: LinkedinOptimizationMinAggregateOutputType | null
    _max: LinkedinOptimizationMaxAggregateOutputType | null
  }

  export type LinkedinOptimizationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    original_text: string | null
    goal: string | null
    industry: string | null
    tone: string | null
    generated_text: string | null
    job_description: string | null
    tailoring_mode: string | null
    created_at: Date | null
  }

  export type LinkedinOptimizationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    original_text: string | null
    goal: string | null
    industry: string | null
    tone: string | null
    generated_text: string | null
    job_description: string | null
    tailoring_mode: string | null
    created_at: Date | null
  }

  export type LinkedinOptimizationCountAggregateOutputType = {
    id: number
    user_id: number
    resume_id: number
    original_text: number
    goal: number
    industry: number
    tone: number
    generated_text: number
    job_description: number
    tailoring_mode: number
    created_at: number
    _all: number
  }


  export type LinkedinOptimizationMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    goal?: true
    industry?: true
    tone?: true
    generated_text?: true
    job_description?: true
    tailoring_mode?: true
    created_at?: true
  }

  export type LinkedinOptimizationMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    goal?: true
    industry?: true
    tone?: true
    generated_text?: true
    job_description?: true
    tailoring_mode?: true
    created_at?: true
  }

  export type LinkedinOptimizationCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    goal?: true
    industry?: true
    tone?: true
    generated_text?: true
    job_description?: true
    tailoring_mode?: true
    created_at?: true
    _all?: true
  }

  export type LinkedinOptimizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedinOptimization to aggregate.
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedinOptimizations to fetch.
     */
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedinOptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedinOptimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedinOptimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedinOptimizations
    **/
    _count?: true | LinkedinOptimizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedinOptimizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedinOptimizationMaxAggregateInputType
  }

  export type GetLinkedinOptimizationAggregateType<T extends LinkedinOptimizationAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedinOptimization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedinOptimization[P]>
      : GetScalarType<T[P], AggregateLinkedinOptimization[P]>
  }




  export type LinkedinOptimizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedinOptimizationWhereInput
    orderBy?: LinkedinOptimizationOrderByWithAggregationInput | LinkedinOptimizationOrderByWithAggregationInput[]
    by: LinkedinOptimizationScalarFieldEnum[] | LinkedinOptimizationScalarFieldEnum
    having?: LinkedinOptimizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedinOptimizationCountAggregateInputType | true
    _min?: LinkedinOptimizationMinAggregateInputType
    _max?: LinkedinOptimizationMaxAggregateInputType
  }

  export type LinkedinOptimizationGroupByOutputType = {
    id: string
    user_id: string
    resume_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at: Date
    _count: LinkedinOptimizationCountAggregateOutputType | null
    _min: LinkedinOptimizationMinAggregateOutputType | null
    _max: LinkedinOptimizationMaxAggregateOutputType | null
  }

  type GetLinkedinOptimizationGroupByPayload<T extends LinkedinOptimizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedinOptimizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedinOptimizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedinOptimizationGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedinOptimizationGroupByOutputType[P]>
        }
      >
    >


  export type LinkedinOptimizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    goal?: boolean
    industry?: boolean
    tone?: boolean
    generated_text?: boolean
    job_description?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedinOptimization"]>

  export type LinkedinOptimizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    goal?: boolean
    industry?: boolean
    tone?: boolean
    generated_text?: boolean
    job_description?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedinOptimization"]>

  export type LinkedinOptimizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    goal?: boolean
    industry?: boolean
    tone?: boolean
    generated_text?: boolean
    job_description?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedinOptimization"]>

  export type LinkedinOptimizationSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    goal?: boolean
    industry?: boolean
    tone?: boolean
    generated_text?: boolean
    job_description?: boolean
    tailoring_mode?: boolean
    created_at?: boolean
  }

  export type LinkedinOptimizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_id" | "original_text" | "goal" | "industry" | "tone" | "generated_text" | "job_description" | "tailoring_mode" | "created_at", ExtArgs["result"]["linkedinOptimization"]>
  export type LinkedinOptimizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type LinkedinOptimizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type LinkedinOptimizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $LinkedinOptimizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedinOptimization"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_id: string
      original_text: string
      goal: string
      industry: string
      tone: string
      generated_text: string
      job_description: string
      tailoring_mode: string
      created_at: Date
    }, ExtArgs["result"]["linkedinOptimization"]>
    composites: {}
  }

  type LinkedinOptimizationGetPayload<S extends boolean | null | undefined | LinkedinOptimizationDefaultArgs> = $Result.GetResult<Prisma.$LinkedinOptimizationPayload, S>

  type LinkedinOptimizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedinOptimizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedinOptimizationCountAggregateInputType | true
    }

  export interface LinkedinOptimizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedinOptimization'], meta: { name: 'LinkedinOptimization' } }
    /**
     * Find zero or one LinkedinOptimization that matches the filter.
     * @param {LinkedinOptimizationFindUniqueArgs} args - Arguments to find a LinkedinOptimization
     * @example
     * // Get one LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedinOptimizationFindUniqueArgs>(args: SelectSubset<T, LinkedinOptimizationFindUniqueArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedinOptimization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedinOptimizationFindUniqueOrThrowArgs} args - Arguments to find a LinkedinOptimization
     * @example
     * // Get one LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedinOptimizationFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedinOptimizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedinOptimization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationFindFirstArgs} args - Arguments to find a LinkedinOptimization
     * @example
     * // Get one LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedinOptimizationFindFirstArgs>(args?: SelectSubset<T, LinkedinOptimizationFindFirstArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedinOptimization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationFindFirstOrThrowArgs} args - Arguments to find a LinkedinOptimization
     * @example
     * // Get one LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedinOptimizationFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedinOptimizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedinOptimizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedinOptimizations
     * const linkedinOptimizations = await prisma.linkedinOptimization.findMany()
     * 
     * // Get first 10 LinkedinOptimizations
     * const linkedinOptimizations = await prisma.linkedinOptimization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkedinOptimizationWithIdOnly = await prisma.linkedinOptimization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkedinOptimizationFindManyArgs>(args?: SelectSubset<T, LinkedinOptimizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedinOptimization.
     * @param {LinkedinOptimizationCreateArgs} args - Arguments to create a LinkedinOptimization.
     * @example
     * // Create one LinkedinOptimization
     * const LinkedinOptimization = await prisma.linkedinOptimization.create({
     *   data: {
     *     // ... data to create a LinkedinOptimization
     *   }
     * })
     * 
     */
    create<T extends LinkedinOptimizationCreateArgs>(args: SelectSubset<T, LinkedinOptimizationCreateArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedinOptimizations.
     * @param {LinkedinOptimizationCreateManyArgs} args - Arguments to create many LinkedinOptimizations.
     * @example
     * // Create many LinkedinOptimizations
     * const linkedinOptimization = await prisma.linkedinOptimization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedinOptimizationCreateManyArgs>(args?: SelectSubset<T, LinkedinOptimizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedinOptimizations and returns the data saved in the database.
     * @param {LinkedinOptimizationCreateManyAndReturnArgs} args - Arguments to create many LinkedinOptimizations.
     * @example
     * // Create many LinkedinOptimizations
     * const linkedinOptimization = await prisma.linkedinOptimization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedinOptimizations and only return the `id`
     * const linkedinOptimizationWithIdOnly = await prisma.linkedinOptimization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedinOptimizationCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedinOptimizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedinOptimization.
     * @param {LinkedinOptimizationDeleteArgs} args - Arguments to delete one LinkedinOptimization.
     * @example
     * // Delete one LinkedinOptimization
     * const LinkedinOptimization = await prisma.linkedinOptimization.delete({
     *   where: {
     *     // ... filter to delete one LinkedinOptimization
     *   }
     * })
     * 
     */
    delete<T extends LinkedinOptimizationDeleteArgs>(args: SelectSubset<T, LinkedinOptimizationDeleteArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedinOptimization.
     * @param {LinkedinOptimizationUpdateArgs} args - Arguments to update one LinkedinOptimization.
     * @example
     * // Update one LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedinOptimizationUpdateArgs>(args: SelectSubset<T, LinkedinOptimizationUpdateArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedinOptimizations.
     * @param {LinkedinOptimizationDeleteManyArgs} args - Arguments to filter LinkedinOptimizations to delete.
     * @example
     * // Delete a few LinkedinOptimizations
     * const { count } = await prisma.linkedinOptimization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedinOptimizationDeleteManyArgs>(args?: SelectSubset<T, LinkedinOptimizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedinOptimizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedinOptimizations
     * const linkedinOptimization = await prisma.linkedinOptimization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedinOptimizationUpdateManyArgs>(args: SelectSubset<T, LinkedinOptimizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedinOptimizations and returns the data updated in the database.
     * @param {LinkedinOptimizationUpdateManyAndReturnArgs} args - Arguments to update many LinkedinOptimizations.
     * @example
     * // Update many LinkedinOptimizations
     * const linkedinOptimization = await prisma.linkedinOptimization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedinOptimizations and only return the `id`
     * const linkedinOptimizationWithIdOnly = await prisma.linkedinOptimization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkedinOptimizationUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedinOptimizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedinOptimization.
     * @param {LinkedinOptimizationUpsertArgs} args - Arguments to update or create a LinkedinOptimization.
     * @example
     * // Update or create a LinkedinOptimization
     * const linkedinOptimization = await prisma.linkedinOptimization.upsert({
     *   create: {
     *     // ... data to create a LinkedinOptimization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedinOptimization we want to update
     *   }
     * })
     */
    upsert<T extends LinkedinOptimizationUpsertArgs>(args: SelectSubset<T, LinkedinOptimizationUpsertArgs<ExtArgs>>): Prisma__LinkedinOptimizationClient<$Result.GetResult<Prisma.$LinkedinOptimizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedinOptimizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationCountArgs} args - Arguments to filter LinkedinOptimizations to count.
     * @example
     * // Count the number of LinkedinOptimizations
     * const count = await prisma.linkedinOptimization.count({
     *   where: {
     *     // ... the filter for the LinkedinOptimizations we want to count
     *   }
     * })
    **/
    count<T extends LinkedinOptimizationCountArgs>(
      args?: Subset<T, LinkedinOptimizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedinOptimizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedinOptimization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkedinOptimizationAggregateArgs>(args: Subset<T, LinkedinOptimizationAggregateArgs>): Prisma.PrismaPromise<GetLinkedinOptimizationAggregateType<T>>

    /**
     * Group by LinkedinOptimization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedinOptimizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkedinOptimizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedinOptimizationGroupByArgs['orderBy'] }
        : { orderBy?: LinkedinOptimizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedinOptimizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedinOptimizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedinOptimization model
   */
  readonly fields: LinkedinOptimizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedinOptimization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedinOptimizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedinOptimization model
   */
  interface LinkedinOptimizationFieldRefs {
    readonly id: FieldRef<"LinkedinOptimization", 'String'>
    readonly user_id: FieldRef<"LinkedinOptimization", 'String'>
    readonly resume_id: FieldRef<"LinkedinOptimization", 'String'>
    readonly original_text: FieldRef<"LinkedinOptimization", 'String'>
    readonly goal: FieldRef<"LinkedinOptimization", 'String'>
    readonly industry: FieldRef<"LinkedinOptimization", 'String'>
    readonly tone: FieldRef<"LinkedinOptimization", 'String'>
    readonly generated_text: FieldRef<"LinkedinOptimization", 'String'>
    readonly job_description: FieldRef<"LinkedinOptimization", 'String'>
    readonly tailoring_mode: FieldRef<"LinkedinOptimization", 'String'>
    readonly created_at: FieldRef<"LinkedinOptimization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkedinOptimization findUnique
   */
  export type LinkedinOptimizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter, which LinkedinOptimization to fetch.
     */
    where: LinkedinOptimizationWhereUniqueInput
  }

  /**
   * LinkedinOptimization findUniqueOrThrow
   */
  export type LinkedinOptimizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter, which LinkedinOptimization to fetch.
     */
    where: LinkedinOptimizationWhereUniqueInput
  }

  /**
   * LinkedinOptimization findFirst
   */
  export type LinkedinOptimizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter, which LinkedinOptimization to fetch.
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedinOptimizations to fetch.
     */
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedinOptimizations.
     */
    cursor?: LinkedinOptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedinOptimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedinOptimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedinOptimizations.
     */
    distinct?: LinkedinOptimizationScalarFieldEnum | LinkedinOptimizationScalarFieldEnum[]
  }

  /**
   * LinkedinOptimization findFirstOrThrow
   */
  export type LinkedinOptimizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter, which LinkedinOptimization to fetch.
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedinOptimizations to fetch.
     */
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedinOptimizations.
     */
    cursor?: LinkedinOptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedinOptimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedinOptimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedinOptimizations.
     */
    distinct?: LinkedinOptimizationScalarFieldEnum | LinkedinOptimizationScalarFieldEnum[]
  }

  /**
   * LinkedinOptimization findMany
   */
  export type LinkedinOptimizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter, which LinkedinOptimizations to fetch.
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedinOptimizations to fetch.
     */
    orderBy?: LinkedinOptimizationOrderByWithRelationInput | LinkedinOptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedinOptimizations.
     */
    cursor?: LinkedinOptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedinOptimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedinOptimizations.
     */
    skip?: number
    distinct?: LinkedinOptimizationScalarFieldEnum | LinkedinOptimizationScalarFieldEnum[]
  }

  /**
   * LinkedinOptimization create
   */
  export type LinkedinOptimizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedinOptimization.
     */
    data: XOR<LinkedinOptimizationCreateInput, LinkedinOptimizationUncheckedCreateInput>
  }

  /**
   * LinkedinOptimization createMany
   */
  export type LinkedinOptimizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedinOptimizations.
     */
    data: LinkedinOptimizationCreateManyInput | LinkedinOptimizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedinOptimization createManyAndReturn
   */
  export type LinkedinOptimizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedinOptimizations.
     */
    data: LinkedinOptimizationCreateManyInput | LinkedinOptimizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedinOptimization update
   */
  export type LinkedinOptimizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedinOptimization.
     */
    data: XOR<LinkedinOptimizationUpdateInput, LinkedinOptimizationUncheckedUpdateInput>
    /**
     * Choose, which LinkedinOptimization to update.
     */
    where: LinkedinOptimizationWhereUniqueInput
  }

  /**
   * LinkedinOptimization updateMany
   */
  export type LinkedinOptimizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedinOptimizations.
     */
    data: XOR<LinkedinOptimizationUpdateManyMutationInput, LinkedinOptimizationUncheckedUpdateManyInput>
    /**
     * Filter which LinkedinOptimizations to update
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * Limit how many LinkedinOptimizations to update.
     */
    limit?: number
  }

  /**
   * LinkedinOptimization updateManyAndReturn
   */
  export type LinkedinOptimizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * The data used to update LinkedinOptimizations.
     */
    data: XOR<LinkedinOptimizationUpdateManyMutationInput, LinkedinOptimizationUncheckedUpdateManyInput>
    /**
     * Filter which LinkedinOptimizations to update
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * Limit how many LinkedinOptimizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedinOptimization upsert
   */
  export type LinkedinOptimizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedinOptimization to update in case it exists.
     */
    where: LinkedinOptimizationWhereUniqueInput
    /**
     * In case the LinkedinOptimization found by the `where` argument doesn't exist, create a new LinkedinOptimization with this data.
     */
    create: XOR<LinkedinOptimizationCreateInput, LinkedinOptimizationUncheckedCreateInput>
    /**
     * In case the LinkedinOptimization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedinOptimizationUpdateInput, LinkedinOptimizationUncheckedUpdateInput>
  }

  /**
   * LinkedinOptimization delete
   */
  export type LinkedinOptimizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
    /**
     * Filter which LinkedinOptimization to delete.
     */
    where: LinkedinOptimizationWhereUniqueInput
  }

  /**
   * LinkedinOptimization deleteMany
   */
  export type LinkedinOptimizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedinOptimizations to delete
     */
    where?: LinkedinOptimizationWhereInput
    /**
     * Limit how many LinkedinOptimizations to delete.
     */
    limit?: number
  }

  /**
   * LinkedinOptimization without action
   */
  export type LinkedinOptimizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedinOptimization
     */
    select?: LinkedinOptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedinOptimization
     */
    omit?: LinkedinOptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedinOptimizationInclude<ExtArgs> | null
  }


  /**
   * Model SavedResume
   */

  export type AggregateSavedResume = {
    _count: SavedResumeCountAggregateOutputType | null
    _min: SavedResumeMinAggregateOutputType | null
    _max: SavedResumeMaxAggregateOutputType | null
  }

  export type SavedResumeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    label: string | null
    created_at: Date | null
  }

  export type SavedResumeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    label: string | null
    created_at: Date | null
  }

  export type SavedResumeCountAggregateOutputType = {
    id: number
    user_id: number
    resume_id: number
    label: number
    created_at: number
    _all: number
  }


  export type SavedResumeMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    label?: true
    created_at?: true
  }

  export type SavedResumeMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    label?: true
    created_at?: true
  }

  export type SavedResumeCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    label?: true
    created_at?: true
    _all?: true
  }

  export type SavedResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedResume to aggregate.
     */
    where?: SavedResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedResumes to fetch.
     */
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedResumes
    **/
    _count?: true | SavedResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedResumeMaxAggregateInputType
  }

  export type GetSavedResumeAggregateType<T extends SavedResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedResume[P]>
      : GetScalarType<T[P], AggregateSavedResume[P]>
  }




  export type SavedResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedResumeWhereInput
    orderBy?: SavedResumeOrderByWithAggregationInput | SavedResumeOrderByWithAggregationInput[]
    by: SavedResumeScalarFieldEnum[] | SavedResumeScalarFieldEnum
    having?: SavedResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedResumeCountAggregateInputType | true
    _min?: SavedResumeMinAggregateInputType
    _max?: SavedResumeMaxAggregateInputType
  }

  export type SavedResumeGroupByOutputType = {
    id: string
    user_id: string
    resume_id: string
    label: string | null
    created_at: Date
    _count: SavedResumeCountAggregateOutputType | null
    _min: SavedResumeMinAggregateOutputType | null
    _max: SavedResumeMaxAggregateOutputType | null
  }

  type GetSavedResumeGroupByPayload<T extends SavedResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedResumeGroupByOutputType[P]>
            : GetScalarType<T[P], SavedResumeGroupByOutputType[P]>
        }
      >
    >


  export type SavedResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    label?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    label?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    label?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    label?: boolean
    created_at?: boolean
  }

  export type SavedResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_id" | "label" | "created_at", ExtArgs["result"]["savedResume"]>
  export type SavedResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type SavedResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type SavedResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $SavedResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedResume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_id: string
      label: string | null
      created_at: Date
    }, ExtArgs["result"]["savedResume"]>
    composites: {}
  }

  type SavedResumeGetPayload<S extends boolean | null | undefined | SavedResumeDefaultArgs> = $Result.GetResult<Prisma.$SavedResumePayload, S>

  type SavedResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedResumeCountAggregateInputType | true
    }

  export interface SavedResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedResume'], meta: { name: 'SavedResume' } }
    /**
     * Find zero or one SavedResume that matches the filter.
     * @param {SavedResumeFindUniqueArgs} args - Arguments to find a SavedResume
     * @example
     * // Get one SavedResume
     * const savedResume = await prisma.savedResume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedResumeFindUniqueArgs>(args: SelectSubset<T, SavedResumeFindUniqueArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedResume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedResumeFindUniqueOrThrowArgs} args - Arguments to find a SavedResume
     * @example
     * // Get one SavedResume
     * const savedResume = await prisma.savedResume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedResume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeFindFirstArgs} args - Arguments to find a SavedResume
     * @example
     * // Get one SavedResume
     * const savedResume = await prisma.savedResume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedResumeFindFirstArgs>(args?: SelectSubset<T, SavedResumeFindFirstArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedResume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeFindFirstOrThrowArgs} args - Arguments to find a SavedResume
     * @example
     * // Get one SavedResume
     * const savedResume = await prisma.savedResume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedResumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedResumes
     * const savedResumes = await prisma.savedResume.findMany()
     * 
     * // Get first 10 SavedResumes
     * const savedResumes = await prisma.savedResume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedResumeWithIdOnly = await prisma.savedResume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedResumeFindManyArgs>(args?: SelectSubset<T, SavedResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedResume.
     * @param {SavedResumeCreateArgs} args - Arguments to create a SavedResume.
     * @example
     * // Create one SavedResume
     * const SavedResume = await prisma.savedResume.create({
     *   data: {
     *     // ... data to create a SavedResume
     *   }
     * })
     * 
     */
    create<T extends SavedResumeCreateArgs>(args: SelectSubset<T, SavedResumeCreateArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedResumes.
     * @param {SavedResumeCreateManyArgs} args - Arguments to create many SavedResumes.
     * @example
     * // Create many SavedResumes
     * const savedResume = await prisma.savedResume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedResumeCreateManyArgs>(args?: SelectSubset<T, SavedResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedResumes and returns the data saved in the database.
     * @param {SavedResumeCreateManyAndReturnArgs} args - Arguments to create many SavedResumes.
     * @example
     * // Create many SavedResumes
     * const savedResume = await prisma.savedResume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedResumes and only return the `id`
     * const savedResumeWithIdOnly = await prisma.savedResume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedResume.
     * @param {SavedResumeDeleteArgs} args - Arguments to delete one SavedResume.
     * @example
     * // Delete one SavedResume
     * const SavedResume = await prisma.savedResume.delete({
     *   where: {
     *     // ... filter to delete one SavedResume
     *   }
     * })
     * 
     */
    delete<T extends SavedResumeDeleteArgs>(args: SelectSubset<T, SavedResumeDeleteArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedResume.
     * @param {SavedResumeUpdateArgs} args - Arguments to update one SavedResume.
     * @example
     * // Update one SavedResume
     * const savedResume = await prisma.savedResume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedResumeUpdateArgs>(args: SelectSubset<T, SavedResumeUpdateArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedResumes.
     * @param {SavedResumeDeleteManyArgs} args - Arguments to filter SavedResumes to delete.
     * @example
     * // Delete a few SavedResumes
     * const { count } = await prisma.savedResume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedResumeDeleteManyArgs>(args?: SelectSubset<T, SavedResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedResumes
     * const savedResume = await prisma.savedResume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedResumeUpdateManyArgs>(args: SelectSubset<T, SavedResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedResumes and returns the data updated in the database.
     * @param {SavedResumeUpdateManyAndReturnArgs} args - Arguments to update many SavedResumes.
     * @example
     * // Update many SavedResumes
     * const savedResume = await prisma.savedResume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedResumes and only return the `id`
     * const savedResumeWithIdOnly = await prisma.savedResume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedResume.
     * @param {SavedResumeUpsertArgs} args - Arguments to update or create a SavedResume.
     * @example
     * // Update or create a SavedResume
     * const savedResume = await prisma.savedResume.upsert({
     *   create: {
     *     // ... data to create a SavedResume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedResume we want to update
     *   }
     * })
     */
    upsert<T extends SavedResumeUpsertArgs>(args: SelectSubset<T, SavedResumeUpsertArgs<ExtArgs>>): Prisma__SavedResumeClient<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeCountArgs} args - Arguments to filter SavedResumes to count.
     * @example
     * // Count the number of SavedResumes
     * const count = await prisma.savedResume.count({
     *   where: {
     *     // ... the filter for the SavedResumes we want to count
     *   }
     * })
    **/
    count<T extends SavedResumeCountArgs>(
      args?: Subset<T, SavedResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedResumeAggregateArgs>(args: Subset<T, SavedResumeAggregateArgs>): Prisma.PrismaPromise<GetSavedResumeAggregateType<T>>

    /**
     * Group by SavedResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedResumeGroupByArgs['orderBy'] }
        : { orderBy?: SavedResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedResume model
   */
  readonly fields: SavedResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedResume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedResume model
   */
  interface SavedResumeFieldRefs {
    readonly id: FieldRef<"SavedResume", 'String'>
    readonly user_id: FieldRef<"SavedResume", 'String'>
    readonly resume_id: FieldRef<"SavedResume", 'String'>
    readonly label: FieldRef<"SavedResume", 'String'>
    readonly created_at: FieldRef<"SavedResume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedResume findUnique
   */
  export type SavedResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter, which SavedResume to fetch.
     */
    where: SavedResumeWhereUniqueInput
  }

  /**
   * SavedResume findUniqueOrThrow
   */
  export type SavedResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter, which SavedResume to fetch.
     */
    where: SavedResumeWhereUniqueInput
  }

  /**
   * SavedResume findFirst
   */
  export type SavedResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter, which SavedResume to fetch.
     */
    where?: SavedResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedResumes to fetch.
     */
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedResumes.
     */
    cursor?: SavedResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedResumes.
     */
    distinct?: SavedResumeScalarFieldEnum | SavedResumeScalarFieldEnum[]
  }

  /**
   * SavedResume findFirstOrThrow
   */
  export type SavedResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter, which SavedResume to fetch.
     */
    where?: SavedResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedResumes to fetch.
     */
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedResumes.
     */
    cursor?: SavedResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedResumes.
     */
    distinct?: SavedResumeScalarFieldEnum | SavedResumeScalarFieldEnum[]
  }

  /**
   * SavedResume findMany
   */
  export type SavedResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter, which SavedResumes to fetch.
     */
    where?: SavedResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedResumes to fetch.
     */
    orderBy?: SavedResumeOrderByWithRelationInput | SavedResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedResumes.
     */
    cursor?: SavedResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedResumes.
     */
    skip?: number
    distinct?: SavedResumeScalarFieldEnum | SavedResumeScalarFieldEnum[]
  }

  /**
   * SavedResume create
   */
  export type SavedResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedResume.
     */
    data: XOR<SavedResumeCreateInput, SavedResumeUncheckedCreateInput>
  }

  /**
   * SavedResume createMany
   */
  export type SavedResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedResumes.
     */
    data: SavedResumeCreateManyInput | SavedResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedResume createManyAndReturn
   */
  export type SavedResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * The data used to create many SavedResumes.
     */
    data: SavedResumeCreateManyInput | SavedResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedResume update
   */
  export type SavedResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedResume.
     */
    data: XOR<SavedResumeUpdateInput, SavedResumeUncheckedUpdateInput>
    /**
     * Choose, which SavedResume to update.
     */
    where: SavedResumeWhereUniqueInput
  }

  /**
   * SavedResume updateMany
   */
  export type SavedResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedResumes.
     */
    data: XOR<SavedResumeUpdateManyMutationInput, SavedResumeUncheckedUpdateManyInput>
    /**
     * Filter which SavedResumes to update
     */
    where?: SavedResumeWhereInput
    /**
     * Limit how many SavedResumes to update.
     */
    limit?: number
  }

  /**
   * SavedResume updateManyAndReturn
   */
  export type SavedResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * The data used to update SavedResumes.
     */
    data: XOR<SavedResumeUpdateManyMutationInput, SavedResumeUncheckedUpdateManyInput>
    /**
     * Filter which SavedResumes to update
     */
    where?: SavedResumeWhereInput
    /**
     * Limit how many SavedResumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedResume upsert
   */
  export type SavedResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedResume to update in case it exists.
     */
    where: SavedResumeWhereUniqueInput
    /**
     * In case the SavedResume found by the `where` argument doesn't exist, create a new SavedResume with this data.
     */
    create: XOR<SavedResumeCreateInput, SavedResumeUncheckedCreateInput>
    /**
     * In case the SavedResume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedResumeUpdateInput, SavedResumeUncheckedUpdateInput>
  }

  /**
   * SavedResume delete
   */
  export type SavedResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
    /**
     * Filter which SavedResume to delete.
     */
    where: SavedResumeWhereUniqueInput
  }

  /**
   * SavedResume deleteMany
   */
  export type SavedResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedResumes to delete
     */
    where?: SavedResumeWhereInput
    /**
     * Limit how many SavedResumes to delete.
     */
    limit?: number
  }

  /**
   * SavedResume without action
   */
  export type SavedResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedResume
     */
    select?: SavedResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedResume
     */
    omit?: SavedResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedResumeInclude<ExtArgs> | null
  }


  /**
   * Model TailoringAnalytics
   */

  export type AggregateTailoringAnalytics = {
    _count: TailoringAnalyticsCountAggregateOutputType | null
    _avg: TailoringAnalyticsAvgAggregateOutputType | null
    _sum: TailoringAnalyticsSumAggregateOutputType | null
    _min: TailoringAnalyticsMinAggregateOutputType | null
    _max: TailoringAnalyticsMaxAggregateOutputType | null
  }

  export type TailoringAnalyticsAvgAggregateOutputType = {
    iterations: number | null
    ats_score: number | null
    jd_score: number | null
  }

  export type TailoringAnalyticsSumAggregateOutputType = {
    iterations: number | null
    ats_score: number | null
    jd_score: number | null
  }

  export type TailoringAnalyticsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    tailoring_mode: string | null
    iterations: number | null
    ats_score: number | null
    jd_score: number | null
    golden_passed: boolean | null
    created_at: Date | null
  }

  export type TailoringAnalyticsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    tailoring_mode: string | null
    iterations: number | null
    ats_score: number | null
    jd_score: number | null
    golden_passed: boolean | null
    created_at: Date | null
  }

  export type TailoringAnalyticsCountAggregateOutputType = {
    id: number
    user_id: number
    resume_id: number
    tailoring_mode: number
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: number
    created_at: number
    _all: number
  }


  export type TailoringAnalyticsAvgAggregateInputType = {
    iterations?: true
    ats_score?: true
    jd_score?: true
  }

  export type TailoringAnalyticsSumAggregateInputType = {
    iterations?: true
    ats_score?: true
    jd_score?: true
  }

  export type TailoringAnalyticsMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    tailoring_mode?: true
    iterations?: true
    ats_score?: true
    jd_score?: true
    golden_passed?: true
    created_at?: true
  }

  export type TailoringAnalyticsMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    tailoring_mode?: true
    iterations?: true
    ats_score?: true
    jd_score?: true
    golden_passed?: true
    created_at?: true
  }

  export type TailoringAnalyticsCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    tailoring_mode?: true
    iterations?: true
    ats_score?: true
    jd_score?: true
    golden_passed?: true
    created_at?: true
    _all?: true
  }

  export type TailoringAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TailoringAnalytics to aggregate.
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TailoringAnalytics to fetch.
     */
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TailoringAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TailoringAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TailoringAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TailoringAnalytics
    **/
    _count?: true | TailoringAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TailoringAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TailoringAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TailoringAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TailoringAnalyticsMaxAggregateInputType
  }

  export type GetTailoringAnalyticsAggregateType<T extends TailoringAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateTailoringAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTailoringAnalytics[P]>
      : GetScalarType<T[P], AggregateTailoringAnalytics[P]>
  }




  export type TailoringAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TailoringAnalyticsWhereInput
    orderBy?: TailoringAnalyticsOrderByWithAggregationInput | TailoringAnalyticsOrderByWithAggregationInput[]
    by: TailoringAnalyticsScalarFieldEnum[] | TailoringAnalyticsScalarFieldEnum
    having?: TailoringAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TailoringAnalyticsCountAggregateInputType | true
    _avg?: TailoringAnalyticsAvgAggregateInputType
    _sum?: TailoringAnalyticsSumAggregateInputType
    _min?: TailoringAnalyticsMinAggregateInputType
    _max?: TailoringAnalyticsMaxAggregateInputType
  }

  export type TailoringAnalyticsGroupByOutputType = {
    id: string
    user_id: string
    resume_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at: Date
    _count: TailoringAnalyticsCountAggregateOutputType | null
    _avg: TailoringAnalyticsAvgAggregateOutputType | null
    _sum: TailoringAnalyticsSumAggregateOutputType | null
    _min: TailoringAnalyticsMinAggregateOutputType | null
    _max: TailoringAnalyticsMaxAggregateOutputType | null
  }

  type GetTailoringAnalyticsGroupByPayload<T extends TailoringAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TailoringAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TailoringAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TailoringAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], TailoringAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type TailoringAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    tailoring_mode?: boolean
    iterations?: boolean
    ats_score?: boolean
    jd_score?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    tailoring_mode?: boolean
    iterations?: boolean
    ats_score?: boolean
    jd_score?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    tailoring_mode?: boolean
    iterations?: boolean
    ats_score?: boolean
    jd_score?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    tailoring_mode?: boolean
    iterations?: boolean
    ats_score?: boolean
    jd_score?: boolean
    golden_passed?: boolean
    created_at?: boolean
  }

  export type TailoringAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_id" | "tailoring_mode" | "iterations" | "ats_score" | "jd_score" | "golden_passed" | "created_at", ExtArgs["result"]["tailoringAnalytics"]>
  export type TailoringAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type TailoringAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type TailoringAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $TailoringAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TailoringAnalytics"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_id: string
      tailoring_mode: string
      iterations: number
      ats_score: number
      jd_score: number
      golden_passed: boolean
      created_at: Date
    }, ExtArgs["result"]["tailoringAnalytics"]>
    composites: {}
  }

  type TailoringAnalyticsGetPayload<S extends boolean | null | undefined | TailoringAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$TailoringAnalyticsPayload, S>

  type TailoringAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TailoringAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TailoringAnalyticsCountAggregateInputType | true
    }

  export interface TailoringAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TailoringAnalytics'], meta: { name: 'TailoringAnalytics' } }
    /**
     * Find zero or one TailoringAnalytics that matches the filter.
     * @param {TailoringAnalyticsFindUniqueArgs} args - Arguments to find a TailoringAnalytics
     * @example
     * // Get one TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TailoringAnalyticsFindUniqueArgs>(args: SelectSubset<T, TailoringAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TailoringAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TailoringAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a TailoringAnalytics
     * @example
     * // Get one TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TailoringAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, TailoringAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TailoringAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsFindFirstArgs} args - Arguments to find a TailoringAnalytics
     * @example
     * // Get one TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TailoringAnalyticsFindFirstArgs>(args?: SelectSubset<T, TailoringAnalyticsFindFirstArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TailoringAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsFindFirstOrThrowArgs} args - Arguments to find a TailoringAnalytics
     * @example
     * // Get one TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TailoringAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, TailoringAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TailoringAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findMany()
     * 
     * // Get first 10 TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tailoringAnalyticsWithIdOnly = await prisma.tailoringAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TailoringAnalyticsFindManyArgs>(args?: SelectSubset<T, TailoringAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TailoringAnalytics.
     * @param {TailoringAnalyticsCreateArgs} args - Arguments to create a TailoringAnalytics.
     * @example
     * // Create one TailoringAnalytics
     * const TailoringAnalytics = await prisma.tailoringAnalytics.create({
     *   data: {
     *     // ... data to create a TailoringAnalytics
     *   }
     * })
     * 
     */
    create<T extends TailoringAnalyticsCreateArgs>(args: SelectSubset<T, TailoringAnalyticsCreateArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TailoringAnalytics.
     * @param {TailoringAnalyticsCreateManyArgs} args - Arguments to create many TailoringAnalytics.
     * @example
     * // Create many TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TailoringAnalyticsCreateManyArgs>(args?: SelectSubset<T, TailoringAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TailoringAnalytics and returns the data saved in the database.
     * @param {TailoringAnalyticsCreateManyAndReturnArgs} args - Arguments to create many TailoringAnalytics.
     * @example
     * // Create many TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TailoringAnalytics and only return the `id`
     * const tailoringAnalyticsWithIdOnly = await prisma.tailoringAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TailoringAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, TailoringAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TailoringAnalytics.
     * @param {TailoringAnalyticsDeleteArgs} args - Arguments to delete one TailoringAnalytics.
     * @example
     * // Delete one TailoringAnalytics
     * const TailoringAnalytics = await prisma.tailoringAnalytics.delete({
     *   where: {
     *     // ... filter to delete one TailoringAnalytics
     *   }
     * })
     * 
     */
    delete<T extends TailoringAnalyticsDeleteArgs>(args: SelectSubset<T, TailoringAnalyticsDeleteArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TailoringAnalytics.
     * @param {TailoringAnalyticsUpdateArgs} args - Arguments to update one TailoringAnalytics.
     * @example
     * // Update one TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TailoringAnalyticsUpdateArgs>(args: SelectSubset<T, TailoringAnalyticsUpdateArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TailoringAnalytics.
     * @param {TailoringAnalyticsDeleteManyArgs} args - Arguments to filter TailoringAnalytics to delete.
     * @example
     * // Delete a few TailoringAnalytics
     * const { count } = await prisma.tailoringAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TailoringAnalyticsDeleteManyArgs>(args?: SelectSubset<T, TailoringAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TailoringAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TailoringAnalyticsUpdateManyArgs>(args: SelectSubset<T, TailoringAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TailoringAnalytics and returns the data updated in the database.
     * @param {TailoringAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many TailoringAnalytics.
     * @example
     * // Update many TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TailoringAnalytics and only return the `id`
     * const tailoringAnalyticsWithIdOnly = await prisma.tailoringAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TailoringAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, TailoringAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TailoringAnalytics.
     * @param {TailoringAnalyticsUpsertArgs} args - Arguments to update or create a TailoringAnalytics.
     * @example
     * // Update or create a TailoringAnalytics
     * const tailoringAnalytics = await prisma.tailoringAnalytics.upsert({
     *   create: {
     *     // ... data to create a TailoringAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TailoringAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends TailoringAnalyticsUpsertArgs>(args: SelectSubset<T, TailoringAnalyticsUpsertArgs<ExtArgs>>): Prisma__TailoringAnalyticsClient<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TailoringAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsCountArgs} args - Arguments to filter TailoringAnalytics to count.
     * @example
     * // Count the number of TailoringAnalytics
     * const count = await prisma.tailoringAnalytics.count({
     *   where: {
     *     // ... the filter for the TailoringAnalytics we want to count
     *   }
     * })
    **/
    count<T extends TailoringAnalyticsCountArgs>(
      args?: Subset<T, TailoringAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TailoringAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TailoringAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TailoringAnalyticsAggregateArgs>(args: Subset<T, TailoringAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetTailoringAnalyticsAggregateType<T>>

    /**
     * Group by TailoringAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TailoringAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TailoringAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TailoringAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: TailoringAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TailoringAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTailoringAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TailoringAnalytics model
   */
  readonly fields: TailoringAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TailoringAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TailoringAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TailoringAnalytics model
   */
  interface TailoringAnalyticsFieldRefs {
    readonly id: FieldRef<"TailoringAnalytics", 'String'>
    readonly user_id: FieldRef<"TailoringAnalytics", 'String'>
    readonly resume_id: FieldRef<"TailoringAnalytics", 'String'>
    readonly tailoring_mode: FieldRef<"TailoringAnalytics", 'String'>
    readonly iterations: FieldRef<"TailoringAnalytics", 'Int'>
    readonly ats_score: FieldRef<"TailoringAnalytics", 'Int'>
    readonly jd_score: FieldRef<"TailoringAnalytics", 'Int'>
    readonly golden_passed: FieldRef<"TailoringAnalytics", 'Boolean'>
    readonly created_at: FieldRef<"TailoringAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TailoringAnalytics findUnique
   */
  export type TailoringAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which TailoringAnalytics to fetch.
     */
    where: TailoringAnalyticsWhereUniqueInput
  }

  /**
   * TailoringAnalytics findUniqueOrThrow
   */
  export type TailoringAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which TailoringAnalytics to fetch.
     */
    where: TailoringAnalyticsWhereUniqueInput
  }

  /**
   * TailoringAnalytics findFirst
   */
  export type TailoringAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which TailoringAnalytics to fetch.
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TailoringAnalytics to fetch.
     */
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TailoringAnalytics.
     */
    cursor?: TailoringAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TailoringAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TailoringAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TailoringAnalytics.
     */
    distinct?: TailoringAnalyticsScalarFieldEnum | TailoringAnalyticsScalarFieldEnum[]
  }

  /**
   * TailoringAnalytics findFirstOrThrow
   */
  export type TailoringAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which TailoringAnalytics to fetch.
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TailoringAnalytics to fetch.
     */
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TailoringAnalytics.
     */
    cursor?: TailoringAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TailoringAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TailoringAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TailoringAnalytics.
     */
    distinct?: TailoringAnalyticsScalarFieldEnum | TailoringAnalyticsScalarFieldEnum[]
  }

  /**
   * TailoringAnalytics findMany
   */
  export type TailoringAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which TailoringAnalytics to fetch.
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TailoringAnalytics to fetch.
     */
    orderBy?: TailoringAnalyticsOrderByWithRelationInput | TailoringAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TailoringAnalytics.
     */
    cursor?: TailoringAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TailoringAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TailoringAnalytics.
     */
    skip?: number
    distinct?: TailoringAnalyticsScalarFieldEnum | TailoringAnalyticsScalarFieldEnum[]
  }

  /**
   * TailoringAnalytics create
   */
  export type TailoringAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a TailoringAnalytics.
     */
    data: XOR<TailoringAnalyticsCreateInput, TailoringAnalyticsUncheckedCreateInput>
  }

  /**
   * TailoringAnalytics createMany
   */
  export type TailoringAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TailoringAnalytics.
     */
    data: TailoringAnalyticsCreateManyInput | TailoringAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TailoringAnalytics createManyAndReturn
   */
  export type TailoringAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many TailoringAnalytics.
     */
    data: TailoringAnalyticsCreateManyInput | TailoringAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TailoringAnalytics update
   */
  export type TailoringAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a TailoringAnalytics.
     */
    data: XOR<TailoringAnalyticsUpdateInput, TailoringAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which TailoringAnalytics to update.
     */
    where: TailoringAnalyticsWhereUniqueInput
  }

  /**
   * TailoringAnalytics updateMany
   */
  export type TailoringAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TailoringAnalytics.
     */
    data: XOR<TailoringAnalyticsUpdateManyMutationInput, TailoringAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which TailoringAnalytics to update
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * Limit how many TailoringAnalytics to update.
     */
    limit?: number
  }

  /**
   * TailoringAnalytics updateManyAndReturn
   */
  export type TailoringAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update TailoringAnalytics.
     */
    data: XOR<TailoringAnalyticsUpdateManyMutationInput, TailoringAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which TailoringAnalytics to update
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * Limit how many TailoringAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TailoringAnalytics upsert
   */
  export type TailoringAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the TailoringAnalytics to update in case it exists.
     */
    where: TailoringAnalyticsWhereUniqueInput
    /**
     * In case the TailoringAnalytics found by the `where` argument doesn't exist, create a new TailoringAnalytics with this data.
     */
    create: XOR<TailoringAnalyticsCreateInput, TailoringAnalyticsUncheckedCreateInput>
    /**
     * In case the TailoringAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TailoringAnalyticsUpdateInput, TailoringAnalyticsUncheckedUpdateInput>
  }

  /**
   * TailoringAnalytics delete
   */
  export type TailoringAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which TailoringAnalytics to delete.
     */
    where: TailoringAnalyticsWhereUniqueInput
  }

  /**
   * TailoringAnalytics deleteMany
   */
  export type TailoringAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TailoringAnalytics to delete
     */
    where?: TailoringAnalyticsWhereInput
    /**
     * Limit how many TailoringAnalytics to delete.
     */
    limit?: number
  }

  /**
   * TailoringAnalytics without action
   */
  export type TailoringAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TailoringAnalytics
     */
    select?: TailoringAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TailoringAnalytics
     */
    omit?: TailoringAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TailoringAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model InterviewSettings
   */

  export type AggregateInterviewSettings = {
    _count: InterviewSettingsCountAggregateOutputType | null
    _min: InterviewSettingsMinAggregateOutputType | null
    _max: InterviewSettingsMaxAggregateOutputType | null
  }

  export type InterviewSettingsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_title: string | null
    job_description: string | null
    difficulty: string | null
    mode: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InterviewSettingsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    job_title: string | null
    job_description: string | null
    difficulty: string | null
    mode: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InterviewSettingsCountAggregateOutputType = {
    id: number
    user_id: number
    job_title: number
    job_description: number
    difficulty: number
    mode: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InterviewSettingsMinAggregateInputType = {
    id?: true
    user_id?: true
    job_title?: true
    job_description?: true
    difficulty?: true
    mode?: true
    created_at?: true
    updated_at?: true
  }

  export type InterviewSettingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    job_title?: true
    job_description?: true
    difficulty?: true
    mode?: true
    created_at?: true
    updated_at?: true
  }

  export type InterviewSettingsCountAggregateInputType = {
    id?: true
    user_id?: true
    job_title?: true
    job_description?: true
    difficulty?: true
    mode?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InterviewSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSettings to aggregate.
     */
    where?: InterviewSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSettings to fetch.
     */
    orderBy?: InterviewSettingsOrderByWithRelationInput | InterviewSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewSettings
    **/
    _count?: true | InterviewSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewSettingsMaxAggregateInputType
  }

  export type GetInterviewSettingsAggregateType<T extends InterviewSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewSettings[P]>
      : GetScalarType<T[P], AggregateInterviewSettings[P]>
  }




  export type InterviewSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewSettingsWhereInput
    orderBy?: InterviewSettingsOrderByWithAggregationInput | InterviewSettingsOrderByWithAggregationInput[]
    by: InterviewSettingsScalarFieldEnum[] | InterviewSettingsScalarFieldEnum
    having?: InterviewSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewSettingsCountAggregateInputType | true
    _min?: InterviewSettingsMinAggregateInputType
    _max?: InterviewSettingsMaxAggregateInputType
  }

  export type InterviewSettingsGroupByOutputType = {
    id: string
    user_id: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at: Date
    updated_at: Date
    _count: InterviewSettingsCountAggregateOutputType | null
    _min: InterviewSettingsMinAggregateOutputType | null
    _max: InterviewSettingsMaxAggregateOutputType | null
  }

  type GetInterviewSettingsGroupByPayload<T extends InterviewSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewSettingsGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_title?: boolean
    job_description?: boolean
    difficulty?: boolean
    mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSettings"]>

  export type InterviewSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_title?: boolean
    job_description?: boolean
    difficulty?: boolean
    mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSettings"]>

  export type InterviewSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_title?: boolean
    job_description?: boolean
    difficulty?: boolean
    mode?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSettings"]>

  export type InterviewSettingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    job_title?: boolean
    job_description?: boolean
    difficulty?: boolean
    mode?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InterviewSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "job_title" | "job_description" | "difficulty" | "mode" | "created_at" | "updated_at", ExtArgs["result"]["interviewSettings"]>
  export type InterviewSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterviewSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterviewSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      job_title: string
      job_description: string
      difficulty: string
      mode: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["interviewSettings"]>
    composites: {}
  }

  type InterviewSettingsGetPayload<S extends boolean | null | undefined | InterviewSettingsDefaultArgs> = $Result.GetResult<Prisma.$InterviewSettingsPayload, S>

  type InterviewSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewSettingsCountAggregateInputType | true
    }

  export interface InterviewSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewSettings'], meta: { name: 'InterviewSettings' } }
    /**
     * Find zero or one InterviewSettings that matches the filter.
     * @param {InterviewSettingsFindUniqueArgs} args - Arguments to find a InterviewSettings
     * @example
     * // Get one InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewSettingsFindUniqueArgs>(args: SelectSubset<T, InterviewSettingsFindUniqueArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewSettingsFindUniqueOrThrowArgs} args - Arguments to find a InterviewSettings
     * @example
     * // Get one InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsFindFirstArgs} args - Arguments to find a InterviewSettings
     * @example
     * // Get one InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewSettingsFindFirstArgs>(args?: SelectSubset<T, InterviewSettingsFindFirstArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsFindFirstOrThrowArgs} args - Arguments to find a InterviewSettings
     * @example
     * // Get one InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findMany()
     * 
     * // Get first 10 InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewSettingsWithIdOnly = await prisma.interviewSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewSettingsFindManyArgs>(args?: SelectSubset<T, InterviewSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewSettings.
     * @param {InterviewSettingsCreateArgs} args - Arguments to create a InterviewSettings.
     * @example
     * // Create one InterviewSettings
     * const InterviewSettings = await prisma.interviewSettings.create({
     *   data: {
     *     // ... data to create a InterviewSettings
     *   }
     * })
     * 
     */
    create<T extends InterviewSettingsCreateArgs>(args: SelectSubset<T, InterviewSettingsCreateArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewSettings.
     * @param {InterviewSettingsCreateManyArgs} args - Arguments to create many InterviewSettings.
     * @example
     * // Create many InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewSettingsCreateManyArgs>(args?: SelectSubset<T, InterviewSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewSettings and returns the data saved in the database.
     * @param {InterviewSettingsCreateManyAndReturnArgs} args - Arguments to create many InterviewSettings.
     * @example
     * // Create many InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewSettings and only return the `id`
     * const interviewSettingsWithIdOnly = await prisma.interviewSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewSettings.
     * @param {InterviewSettingsDeleteArgs} args - Arguments to delete one InterviewSettings.
     * @example
     * // Delete one InterviewSettings
     * const InterviewSettings = await prisma.interviewSettings.delete({
     *   where: {
     *     // ... filter to delete one InterviewSettings
     *   }
     * })
     * 
     */
    delete<T extends InterviewSettingsDeleteArgs>(args: SelectSubset<T, InterviewSettingsDeleteArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewSettings.
     * @param {InterviewSettingsUpdateArgs} args - Arguments to update one InterviewSettings.
     * @example
     * // Update one InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewSettingsUpdateArgs>(args: SelectSubset<T, InterviewSettingsUpdateArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewSettings.
     * @param {InterviewSettingsDeleteManyArgs} args - Arguments to filter InterviewSettings to delete.
     * @example
     * // Delete a few InterviewSettings
     * const { count } = await prisma.interviewSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewSettingsDeleteManyArgs>(args?: SelectSubset<T, InterviewSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewSettingsUpdateManyArgs>(args: SelectSubset<T, InterviewSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSettings and returns the data updated in the database.
     * @param {InterviewSettingsUpdateManyAndReturnArgs} args - Arguments to update many InterviewSettings.
     * @example
     * // Update many InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewSettings and only return the `id`
     * const interviewSettingsWithIdOnly = await prisma.interviewSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewSettings.
     * @param {InterviewSettingsUpsertArgs} args - Arguments to update or create a InterviewSettings.
     * @example
     * // Update or create a InterviewSettings
     * const interviewSettings = await prisma.interviewSettings.upsert({
     *   create: {
     *     // ... data to create a InterviewSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewSettings we want to update
     *   }
     * })
     */
    upsert<T extends InterviewSettingsUpsertArgs>(args: SelectSubset<T, InterviewSettingsUpsertArgs<ExtArgs>>): Prisma__InterviewSettingsClient<$Result.GetResult<Prisma.$InterviewSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsCountArgs} args - Arguments to filter InterviewSettings to count.
     * @example
     * // Count the number of InterviewSettings
     * const count = await prisma.interviewSettings.count({
     *   where: {
     *     // ... the filter for the InterviewSettings we want to count
     *   }
     * })
    **/
    count<T extends InterviewSettingsCountArgs>(
      args?: Subset<T, InterviewSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewSettingsAggregateArgs>(args: Subset<T, InterviewSettingsAggregateArgs>): Prisma.PrismaPromise<GetInterviewSettingsAggregateType<T>>

    /**
     * Group by InterviewSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewSettingsGroupByArgs['orderBy'] }
        : { orderBy?: InterviewSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewSettings model
   */
  readonly fields: InterviewSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewSettings model
   */
  interface InterviewSettingsFieldRefs {
    readonly id: FieldRef<"InterviewSettings", 'String'>
    readonly user_id: FieldRef<"InterviewSettings", 'String'>
    readonly job_title: FieldRef<"InterviewSettings", 'String'>
    readonly job_description: FieldRef<"InterviewSettings", 'String'>
    readonly difficulty: FieldRef<"InterviewSettings", 'String'>
    readonly mode: FieldRef<"InterviewSettings", 'String'>
    readonly created_at: FieldRef<"InterviewSettings", 'DateTime'>
    readonly updated_at: FieldRef<"InterviewSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewSettings findUnique
   */
  export type InterviewSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSettings to fetch.
     */
    where: InterviewSettingsWhereUniqueInput
  }

  /**
   * InterviewSettings findUniqueOrThrow
   */
  export type InterviewSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSettings to fetch.
     */
    where: InterviewSettingsWhereUniqueInput
  }

  /**
   * InterviewSettings findFirst
   */
  export type InterviewSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSettings to fetch.
     */
    where?: InterviewSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSettings to fetch.
     */
    orderBy?: InterviewSettingsOrderByWithRelationInput | InterviewSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSettings.
     */
    cursor?: InterviewSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSettings.
     */
    distinct?: InterviewSettingsScalarFieldEnum | InterviewSettingsScalarFieldEnum[]
  }

  /**
   * InterviewSettings findFirstOrThrow
   */
  export type InterviewSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSettings to fetch.
     */
    where?: InterviewSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSettings to fetch.
     */
    orderBy?: InterviewSettingsOrderByWithRelationInput | InterviewSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSettings.
     */
    cursor?: InterviewSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSettings.
     */
    distinct?: InterviewSettingsScalarFieldEnum | InterviewSettingsScalarFieldEnum[]
  }

  /**
   * InterviewSettings findMany
   */
  export type InterviewSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSettings to fetch.
     */
    where?: InterviewSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSettings to fetch.
     */
    orderBy?: InterviewSettingsOrderByWithRelationInput | InterviewSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewSettings.
     */
    cursor?: InterviewSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSettings.
     */
    skip?: number
    distinct?: InterviewSettingsScalarFieldEnum | InterviewSettingsScalarFieldEnum[]
  }

  /**
   * InterviewSettings create
   */
  export type InterviewSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewSettings.
     */
    data: XOR<InterviewSettingsCreateInput, InterviewSettingsUncheckedCreateInput>
  }

  /**
   * InterviewSettings createMany
   */
  export type InterviewSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewSettings.
     */
    data: InterviewSettingsCreateManyInput | InterviewSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewSettings createManyAndReturn
   */
  export type InterviewSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewSettings.
     */
    data: InterviewSettingsCreateManyInput | InterviewSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSettings update
   */
  export type InterviewSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewSettings.
     */
    data: XOR<InterviewSettingsUpdateInput, InterviewSettingsUncheckedUpdateInput>
    /**
     * Choose, which InterviewSettings to update.
     */
    where: InterviewSettingsWhereUniqueInput
  }

  /**
   * InterviewSettings updateMany
   */
  export type InterviewSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewSettings.
     */
    data: XOR<InterviewSettingsUpdateManyMutationInput, InterviewSettingsUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSettings to update
     */
    where?: InterviewSettingsWhereInput
    /**
     * Limit how many InterviewSettings to update.
     */
    limit?: number
  }

  /**
   * InterviewSettings updateManyAndReturn
   */
  export type InterviewSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * The data used to update InterviewSettings.
     */
    data: XOR<InterviewSettingsUpdateManyMutationInput, InterviewSettingsUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSettings to update
     */
    where?: InterviewSettingsWhereInput
    /**
     * Limit how many InterviewSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSettings upsert
   */
  export type InterviewSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewSettings to update in case it exists.
     */
    where: InterviewSettingsWhereUniqueInput
    /**
     * In case the InterviewSettings found by the `where` argument doesn't exist, create a new InterviewSettings with this data.
     */
    create: XOR<InterviewSettingsCreateInput, InterviewSettingsUncheckedCreateInput>
    /**
     * In case the InterviewSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewSettingsUpdateInput, InterviewSettingsUncheckedUpdateInput>
  }

  /**
   * InterviewSettings delete
   */
  export type InterviewSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
    /**
     * Filter which InterviewSettings to delete.
     */
    where: InterviewSettingsWhereUniqueInput
  }

  /**
   * InterviewSettings deleteMany
   */
  export type InterviewSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSettings to delete
     */
    where?: InterviewSettingsWhereInput
    /**
     * Limit how many InterviewSettings to delete.
     */
    limit?: number
  }

  /**
   * InterviewSettings without action
   */
  export type InterviewSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSettings
     */
    select?: InterviewSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSettings
     */
    omit?: InterviewSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSettingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
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

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const CoverLetterScalarFieldEnum: {
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

  export type CoverLetterScalarFieldEnum = (typeof CoverLetterScalarFieldEnum)[keyof typeof CoverLetterScalarFieldEnum]


  export const LinkedinOptimizationScalarFieldEnum: {
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

  export type LinkedinOptimizationScalarFieldEnum = (typeof LinkedinOptimizationScalarFieldEnum)[keyof typeof LinkedinOptimizationScalarFieldEnum]


  export const SavedResumeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    resume_id: 'resume_id',
    label: 'label',
    created_at: 'created_at'
  };

  export type SavedResumeScalarFieldEnum = (typeof SavedResumeScalarFieldEnum)[keyof typeof SavedResumeScalarFieldEnum]


  export const TailoringAnalyticsScalarFieldEnum: {
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

  export type TailoringAnalyticsScalarFieldEnum = (typeof TailoringAnalyticsScalarFieldEnum)[keyof typeof TailoringAnalyticsScalarFieldEnum]


  export const InterviewSettingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_title: 'job_title',
    job_description: 'job_description',
    difficulty: 'difficulty',
    mode: 'mode',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InterviewSettingsScalarFieldEnum = (typeof InterviewSettingsScalarFieldEnum)[keyof typeof InterviewSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    is_premium?: BoolFilter<"User"> | boolean
    tailoring_mode?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    full_name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    education?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    subscription_tier?: StringNullableFilter<"User"> | string | null
    subscription_end_date?: DateTimeNullableFilter<"User"> | Date | string | null
    daily_basic_tailorings_used?: IntFilter<"User"> | number
    daily_personalized_tailorings_used?: IntFilter<"User"> | number
    daily_cover_letters_used?: IntFilter<"User"> | number
    daily_linkedin_optimizations_used?: IntFilter<"User"> | number
    daily_interview_sessions_used?: IntFilter<"User"> | number
    daily_reset_date?: DateTimeNullableFilter<"User"> | Date | string | null
    resumes?: ResumeListRelationFilter
    coverLetters?: CoverLetterListRelationFilter
    linkedinOptimizations?: LinkedinOptimizationListRelationFilter
    savedResumes?: SavedResumeListRelationFilter
    tailoringAnalytics?: TailoringAnalyticsListRelationFilter
    interviewSettings?: InterviewSettingsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    is_premium?: SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    created_at?: SortOrder
    full_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    subscription_tier?: SortOrderInput | SortOrder
    subscription_end_date?: SortOrderInput | SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
    daily_reset_date?: SortOrderInput | SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
    coverLetters?: CoverLetterOrderByRelationAggregateInput
    linkedinOptimizations?: LinkedinOptimizationOrderByRelationAggregateInput
    savedResumes?: SavedResumeOrderByRelationAggregateInput
    tailoringAnalytics?: TailoringAnalyticsOrderByRelationAggregateInput
    interviewSettings?: InterviewSettingsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    is_premium?: BoolFilter<"User"> | boolean
    tailoring_mode?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    full_name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    education?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    subscription_tier?: StringNullableFilter<"User"> | string | null
    subscription_end_date?: DateTimeNullableFilter<"User"> | Date | string | null
    daily_basic_tailorings_used?: IntFilter<"User"> | number
    daily_personalized_tailorings_used?: IntFilter<"User"> | number
    daily_cover_letters_used?: IntFilter<"User"> | number
    daily_linkedin_optimizations_used?: IntFilter<"User"> | number
    daily_interview_sessions_used?: IntFilter<"User"> | number
    daily_reset_date?: DateTimeNullableFilter<"User"> | Date | string | null
    resumes?: ResumeListRelationFilter
    coverLetters?: CoverLetterListRelationFilter
    linkedinOptimizations?: LinkedinOptimizationListRelationFilter
    savedResumes?: SavedResumeListRelationFilter
    tailoringAnalytics?: TailoringAnalyticsListRelationFilter
    interviewSettings?: InterviewSettingsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    is_premium?: SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    created_at?: SortOrder
    full_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    subscription_tier?: SortOrderInput | SortOrder
    subscription_end_date?: SortOrderInput | SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
    daily_reset_date?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    is_premium?: BoolWithAggregatesFilter<"User"> | boolean
    tailoring_mode?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    full_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"User"> | string | null
    company?: StringNullableWithAggregatesFilter<"User"> | string | null
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    education?: StringNullableWithAggregatesFilter<"User"> | string | null
    skills?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscription_tier?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscription_end_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    daily_basic_tailorings_used?: IntWithAggregatesFilter<"User"> | number
    daily_personalized_tailorings_used?: IntWithAggregatesFilter<"User"> | number
    daily_cover_letters_used?: IntWithAggregatesFilter<"User"> | number
    daily_linkedin_optimizations_used?: IntWithAggregatesFilter<"User"> | number
    daily_interview_sessions_used?: IntWithAggregatesFilter<"User"> | number
    daily_reset_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    user_id?: StringFilter<"Resume"> | string
    resume_text?: StringFilter<"Resume"> | string
    job_description?: StringFilter<"Resume"> | string
    modified_resume?: StringNullableFilter<"Resume"> | string | null
    ats_score?: IntNullableFilter<"Resume"> | number | null
    jd_score?: IntNullableFilter<"Resume"> | number | null
    version?: IntFilter<"Resume"> | number
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coverLetters?: CoverLetterListRelationFilter
    linkedinOptimizations?: LinkedinOptimizationListRelationFilter
    savedResumes?: SavedResumeListRelationFilter
    tailoringAnalytics?: TailoringAnalyticsListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    version?: SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    coverLetters?: CoverLetterOrderByRelationAggregateInput
    linkedinOptimizations?: LinkedinOptimizationOrderByRelationAggregateInput
    savedResumes?: SavedResumeOrderByRelationAggregateInput
    tailoringAnalytics?: TailoringAnalyticsOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    user_id?: StringFilter<"Resume"> | string
    resume_text?: StringFilter<"Resume"> | string
    job_description?: StringFilter<"Resume"> | string
    modified_resume?: StringNullableFilter<"Resume"> | string | null
    ats_score?: IntNullableFilter<"Resume"> | number | null
    jd_score?: IntNullableFilter<"Resume"> | number | null
    version?: IntFilter<"Resume"> | number
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coverLetters?: CoverLetterListRelationFilter
    linkedinOptimizations?: LinkedinOptimizationListRelationFilter
    savedResumes?: SavedResumeListRelationFilter
    tailoringAnalytics?: TailoringAnalyticsListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    version?: SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    user_id?: StringWithAggregatesFilter<"Resume"> | string
    resume_text?: StringWithAggregatesFilter<"Resume"> | string
    job_description?: StringWithAggregatesFilter<"Resume"> | string
    modified_resume?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    ats_score?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    jd_score?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    version?: IntWithAggregatesFilter<"Resume"> | number
    tailoring_mode?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type CoverLetterWhereInput = {
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    user_id?: StringFilter<"CoverLetter"> | string
    original_resume_id?: StringFilter<"CoverLetter"> | string
    job_description?: StringFilter<"CoverLetter"> | string
    generated_letter?: StringFilter<"CoverLetter"> | string
    explanation?: StringNullableFilter<"CoverLetter"> | string | null
    score?: IntNullableFilter<"CoverLetter"> | number | null
    feedback?: StringNullableFilter<"CoverLetter"> | string | null
    golden_passed?: BoolNullableFilter<"CoverLetter"> | boolean | null
    tailoring_mode?: StringFilter<"CoverLetter"> | string
    version?: IntFilter<"CoverLetter"> | number
    created_at?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type CoverLetterOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    original_resume_id?: SortOrder
    job_description?: SortOrder
    generated_letter?: SortOrder
    explanation?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    golden_passed?: SortOrderInput | SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type CoverLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoverLetterWhereInput | CoverLetterWhereInput[]
    OR?: CoverLetterWhereInput[]
    NOT?: CoverLetterWhereInput | CoverLetterWhereInput[]
    user_id?: StringFilter<"CoverLetter"> | string
    original_resume_id?: StringFilter<"CoverLetter"> | string
    job_description?: StringFilter<"CoverLetter"> | string
    generated_letter?: StringFilter<"CoverLetter"> | string
    explanation?: StringNullableFilter<"CoverLetter"> | string | null
    score?: IntNullableFilter<"CoverLetter"> | number | null
    feedback?: StringNullableFilter<"CoverLetter"> | string | null
    golden_passed?: BoolNullableFilter<"CoverLetter"> | boolean | null
    tailoring_mode?: StringFilter<"CoverLetter"> | string
    version?: IntFilter<"CoverLetter"> | number
    created_at?: DateTimeFilter<"CoverLetter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type CoverLetterOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    original_resume_id?: SortOrder
    job_description?: SortOrder
    generated_letter?: SortOrder
    explanation?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    golden_passed?: SortOrderInput | SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    _count?: CoverLetterCountOrderByAggregateInput
    _avg?: CoverLetterAvgOrderByAggregateInput
    _max?: CoverLetterMaxOrderByAggregateInput
    _min?: CoverLetterMinOrderByAggregateInput
    _sum?: CoverLetterSumOrderByAggregateInput
  }

  export type CoverLetterScalarWhereWithAggregatesInput = {
    AND?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    OR?: CoverLetterScalarWhereWithAggregatesInput[]
    NOT?: CoverLetterScalarWhereWithAggregatesInput | CoverLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoverLetter"> | string
    user_id?: StringWithAggregatesFilter<"CoverLetter"> | string
    original_resume_id?: StringWithAggregatesFilter<"CoverLetter"> | string
    job_description?: StringWithAggregatesFilter<"CoverLetter"> | string
    generated_letter?: StringWithAggregatesFilter<"CoverLetter"> | string
    explanation?: StringNullableWithAggregatesFilter<"CoverLetter"> | string | null
    score?: IntNullableWithAggregatesFilter<"CoverLetter"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"CoverLetter"> | string | null
    golden_passed?: BoolNullableWithAggregatesFilter<"CoverLetter"> | boolean | null
    tailoring_mode?: StringWithAggregatesFilter<"CoverLetter"> | string
    version?: IntWithAggregatesFilter<"CoverLetter"> | number
    created_at?: DateTimeWithAggregatesFilter<"CoverLetter"> | Date | string
  }

  export type LinkedinOptimizationWhereInput = {
    AND?: LinkedinOptimizationWhereInput | LinkedinOptimizationWhereInput[]
    OR?: LinkedinOptimizationWhereInput[]
    NOT?: LinkedinOptimizationWhereInput | LinkedinOptimizationWhereInput[]
    id?: StringFilter<"LinkedinOptimization"> | string
    user_id?: StringFilter<"LinkedinOptimization"> | string
    resume_id?: StringFilter<"LinkedinOptimization"> | string
    original_text?: StringFilter<"LinkedinOptimization"> | string
    goal?: StringFilter<"LinkedinOptimization"> | string
    industry?: StringFilter<"LinkedinOptimization"> | string
    tone?: StringFilter<"LinkedinOptimization"> | string
    generated_text?: StringFilter<"LinkedinOptimization"> | string
    job_description?: StringFilter<"LinkedinOptimization"> | string
    tailoring_mode?: StringFilter<"LinkedinOptimization"> | string
    created_at?: DateTimeFilter<"LinkedinOptimization"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type LinkedinOptimizationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    goal?: SortOrder
    industry?: SortOrder
    tone?: SortOrder
    generated_text?: SortOrder
    job_description?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type LinkedinOptimizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkedinOptimizationWhereInput | LinkedinOptimizationWhereInput[]
    OR?: LinkedinOptimizationWhereInput[]
    NOT?: LinkedinOptimizationWhereInput | LinkedinOptimizationWhereInput[]
    user_id?: StringFilter<"LinkedinOptimization"> | string
    resume_id?: StringFilter<"LinkedinOptimization"> | string
    original_text?: StringFilter<"LinkedinOptimization"> | string
    goal?: StringFilter<"LinkedinOptimization"> | string
    industry?: StringFilter<"LinkedinOptimization"> | string
    tone?: StringFilter<"LinkedinOptimization"> | string
    generated_text?: StringFilter<"LinkedinOptimization"> | string
    job_description?: StringFilter<"LinkedinOptimization"> | string
    tailoring_mode?: StringFilter<"LinkedinOptimization"> | string
    created_at?: DateTimeFilter<"LinkedinOptimization"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type LinkedinOptimizationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    goal?: SortOrder
    industry?: SortOrder
    tone?: SortOrder
    generated_text?: SortOrder
    job_description?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
    _count?: LinkedinOptimizationCountOrderByAggregateInput
    _max?: LinkedinOptimizationMaxOrderByAggregateInput
    _min?: LinkedinOptimizationMinOrderByAggregateInput
  }

  export type LinkedinOptimizationScalarWhereWithAggregatesInput = {
    AND?: LinkedinOptimizationScalarWhereWithAggregatesInput | LinkedinOptimizationScalarWhereWithAggregatesInput[]
    OR?: LinkedinOptimizationScalarWhereWithAggregatesInput[]
    NOT?: LinkedinOptimizationScalarWhereWithAggregatesInput | LinkedinOptimizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    user_id?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    resume_id?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    original_text?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    goal?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    industry?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    tone?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    generated_text?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    job_description?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    tailoring_mode?: StringWithAggregatesFilter<"LinkedinOptimization"> | string
    created_at?: DateTimeWithAggregatesFilter<"LinkedinOptimization"> | Date | string
  }

  export type SavedResumeWhereInput = {
    AND?: SavedResumeWhereInput | SavedResumeWhereInput[]
    OR?: SavedResumeWhereInput[]
    NOT?: SavedResumeWhereInput | SavedResumeWhereInput[]
    id?: StringFilter<"SavedResume"> | string
    user_id?: StringFilter<"SavedResume"> | string
    resume_id?: StringFilter<"SavedResume"> | string
    label?: StringNullableFilter<"SavedResume"> | string | null
    created_at?: DateTimeFilter<"SavedResume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type SavedResumeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    label?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type SavedResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedResumeWhereInput | SavedResumeWhereInput[]
    OR?: SavedResumeWhereInput[]
    NOT?: SavedResumeWhereInput | SavedResumeWhereInput[]
    user_id?: StringFilter<"SavedResume"> | string
    resume_id?: StringFilter<"SavedResume"> | string
    label?: StringNullableFilter<"SavedResume"> | string | null
    created_at?: DateTimeFilter<"SavedResume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type SavedResumeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    label?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: SavedResumeCountOrderByAggregateInput
    _max?: SavedResumeMaxOrderByAggregateInput
    _min?: SavedResumeMinOrderByAggregateInput
  }

  export type SavedResumeScalarWhereWithAggregatesInput = {
    AND?: SavedResumeScalarWhereWithAggregatesInput | SavedResumeScalarWhereWithAggregatesInput[]
    OR?: SavedResumeScalarWhereWithAggregatesInput[]
    NOT?: SavedResumeScalarWhereWithAggregatesInput | SavedResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedResume"> | string
    user_id?: StringWithAggregatesFilter<"SavedResume"> | string
    resume_id?: StringWithAggregatesFilter<"SavedResume"> | string
    label?: StringNullableWithAggregatesFilter<"SavedResume"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SavedResume"> | Date | string
  }

  export type TailoringAnalyticsWhereInput = {
    AND?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    OR?: TailoringAnalyticsWhereInput[]
    NOT?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    id?: StringFilter<"TailoringAnalytics"> | string
    user_id?: StringFilter<"TailoringAnalytics"> | string
    resume_id?: StringFilter<"TailoringAnalytics"> | string
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    iterations?: IntFilter<"TailoringAnalytics"> | number
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type TailoringAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    tailoring_mode?: SortOrder
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type TailoringAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    OR?: TailoringAnalyticsWhereInput[]
    NOT?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    user_id?: StringFilter<"TailoringAnalytics"> | string
    resume_id?: StringFilter<"TailoringAnalytics"> | string
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    iterations?: IntFilter<"TailoringAnalytics"> | number
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type TailoringAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    tailoring_mode?: SortOrder
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
    _count?: TailoringAnalyticsCountOrderByAggregateInput
    _avg?: TailoringAnalyticsAvgOrderByAggregateInput
    _max?: TailoringAnalyticsMaxOrderByAggregateInput
    _min?: TailoringAnalyticsMinOrderByAggregateInput
    _sum?: TailoringAnalyticsSumOrderByAggregateInput
  }

  export type TailoringAnalyticsScalarWhereWithAggregatesInput = {
    AND?: TailoringAnalyticsScalarWhereWithAggregatesInput | TailoringAnalyticsScalarWhereWithAggregatesInput[]
    OR?: TailoringAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: TailoringAnalyticsScalarWhereWithAggregatesInput | TailoringAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    user_id?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    resume_id?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    tailoring_mode?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    iterations?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    ats_score?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    jd_score?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolWithAggregatesFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TailoringAnalytics"> | Date | string
  }

  export type InterviewSettingsWhereInput = {
    AND?: InterviewSettingsWhereInput | InterviewSettingsWhereInput[]
    OR?: InterviewSettingsWhereInput[]
    NOT?: InterviewSettingsWhereInput | InterviewSettingsWhereInput[]
    id?: StringFilter<"InterviewSettings"> | string
    user_id?: StringFilter<"InterviewSettings"> | string
    job_title?: StringFilter<"InterviewSettings"> | string
    job_description?: StringFilter<"InterviewSettings"> | string
    difficulty?: StringFilter<"InterviewSettings"> | string
    mode?: StringFilter<"InterviewSettings"> | string
    created_at?: DateTimeFilter<"InterviewSettings"> | Date | string
    updated_at?: DateTimeFilter<"InterviewSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InterviewSettingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_title?: SortOrder
    job_description?: SortOrder
    difficulty?: SortOrder
    mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InterviewSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewSettingsWhereInput | InterviewSettingsWhereInput[]
    OR?: InterviewSettingsWhereInput[]
    NOT?: InterviewSettingsWhereInput | InterviewSettingsWhereInput[]
    user_id?: StringFilter<"InterviewSettings"> | string
    job_title?: StringFilter<"InterviewSettings"> | string
    job_description?: StringFilter<"InterviewSettings"> | string
    difficulty?: StringFilter<"InterviewSettings"> | string
    mode?: StringFilter<"InterviewSettings"> | string
    created_at?: DateTimeFilter<"InterviewSettings"> | Date | string
    updated_at?: DateTimeFilter<"InterviewSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InterviewSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_title?: SortOrder
    job_description?: SortOrder
    difficulty?: SortOrder
    mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InterviewSettingsCountOrderByAggregateInput
    _max?: InterviewSettingsMaxOrderByAggregateInput
    _min?: InterviewSettingsMinOrderByAggregateInput
  }

  export type InterviewSettingsScalarWhereWithAggregatesInput = {
    AND?: InterviewSettingsScalarWhereWithAggregatesInput | InterviewSettingsScalarWhereWithAggregatesInput[]
    OR?: InterviewSettingsScalarWhereWithAggregatesInput[]
    NOT?: InterviewSettingsScalarWhereWithAggregatesInput | InterviewSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewSettings"> | string
    user_id?: StringWithAggregatesFilter<"InterviewSettings"> | string
    job_title?: StringWithAggregatesFilter<"InterviewSettings"> | string
    job_description?: StringWithAggregatesFilter<"InterviewSettings"> | string
    difficulty?: StringWithAggregatesFilter<"InterviewSettings"> | string
    mode?: StringWithAggregatesFilter<"InterviewSettings"> | string
    created_at?: DateTimeWithAggregatesFilter<"InterviewSettings"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"InterviewSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResumeCreateInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    coverLetters?: CoverLetterCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateInput = {
    id?: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCoverLettersInput
    resume: ResumeCreateNestedOneWithoutCoverLettersInput
  }

  export type CoverLetterUncheckedCreateInput = {
    id?: string
    user_id: string
    original_resume_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type CoverLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoverLettersNestedInput
    resume?: ResumeUpdateOneRequiredWithoutCoverLettersNestedInput
  }

  export type CoverLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    original_resume_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateManyInput = {
    id?: string
    user_id: string
    original_resume_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type CoverLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    original_resume_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationCreateInput = {
    id?: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutLinkedinOptimizationsInput
    resume: ResumeCreateNestedOneWithoutLinkedinOptimizationsInput
  }

  export type LinkedinOptimizationUncheckedCreateInput = {
    id?: string
    user_id: string
    resume_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type LinkedinOptimizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput
  }

  export type LinkedinOptimizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationCreateManyInput = {
    id?: string
    user_id: string
    resume_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type LinkedinOptimizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeCreateInput = {
    id?: string
    label?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSavedResumesInput
    resume: ResumeCreateNestedOneWithoutSavedResumesInput
  }

  export type SavedResumeUncheckedCreateInput = {
    id?: string
    user_id: string
    resume_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type SavedResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedResumesNestedInput
    resume?: ResumeUpdateOneRequiredWithoutSavedResumesNestedInput
  }

  export type SavedResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeCreateManyInput = {
    id?: string
    user_id: string
    resume_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type SavedResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsCreateInput = {
    id?: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTailoringAnalyticsInput
    resume: ResumeCreateNestedOneWithoutTailoringAnalyticsInput
  }

  export type TailoringAnalyticsUncheckedCreateInput = {
    id?: string
    user_id: string
    resume_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTailoringAnalyticsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutTailoringAnalyticsNestedInput
  }

  export type TailoringAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsCreateManyInput = {
    id?: string
    user_id: string
    resume_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsCreateInput = {
    id?: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutInterviewSettingsInput
  }

  export type InterviewSettingsUncheckedCreateInput = {
    id?: string
    user_id: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InterviewSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterviewSettingsNestedInput
  }

  export type InterviewSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsCreateManyInput = {
    id?: string
    user_id: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InterviewSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type CoverLetterListRelationFilter = {
    every?: CoverLetterWhereInput
    some?: CoverLetterWhereInput
    none?: CoverLetterWhereInput
  }

  export type LinkedinOptimizationListRelationFilter = {
    every?: LinkedinOptimizationWhereInput
    some?: LinkedinOptimizationWhereInput
    none?: LinkedinOptimizationWhereInput
  }

  export type SavedResumeListRelationFilter = {
    every?: SavedResumeWhereInput
    some?: SavedResumeWhereInput
    none?: SavedResumeWhereInput
  }

  export type TailoringAnalyticsListRelationFilter = {
    every?: TailoringAnalyticsWhereInput
    some?: TailoringAnalyticsWhereInput
    none?: TailoringAnalyticsWhereInput
  }

  export type InterviewSettingsListRelationFilter = {
    every?: InterviewSettingsWhereInput
    some?: InterviewSettingsWhereInput
    none?: InterviewSettingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoverLetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkedinOptimizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TailoringAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewSettingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_premium?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    linkedin?: SortOrder
    company?: SortOrder
    position?: SortOrder
    education?: SortOrder
    skills?: SortOrder
    bio?: SortOrder
    subscription_tier?: SortOrder
    subscription_end_date?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_premium?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    linkedin?: SortOrder
    company?: SortOrder
    position?: SortOrder
    education?: SortOrder
    skills?: SortOrder
    bio?: SortOrder
    subscription_tier?: SortOrder
    subscription_end_date?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    is_premium?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    linkedin?: SortOrder
    company?: SortOrder
    position?: SortOrder
    education?: SortOrder
    skills?: SortOrder
    bio?: SortOrder
    subscription_tier?: SortOrder
    subscription_end_date?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_linkedin_optimizations_used?: SortOrder
    daily_interview_sessions_used?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type CoverLetterCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    original_resume_id?: SortOrder
    job_description?: SortOrder
    generated_letter?: SortOrder
    explanation?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    golden_passed?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type CoverLetterAvgOrderByAggregateInput = {
    score?: SortOrder
    version?: SortOrder
  }

  export type CoverLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    original_resume_id?: SortOrder
    job_description?: SortOrder
    generated_letter?: SortOrder
    explanation?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    golden_passed?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type CoverLetterMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    original_resume_id?: SortOrder
    job_description?: SortOrder
    generated_letter?: SortOrder
    explanation?: SortOrder
    score?: SortOrder
    feedback?: SortOrder
    golden_passed?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type CoverLetterSumOrderByAggregateInput = {
    score?: SortOrder
    version?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LinkedinOptimizationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    goal?: SortOrder
    industry?: SortOrder
    tone?: SortOrder
    generated_text?: SortOrder
    job_description?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type LinkedinOptimizationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    goal?: SortOrder
    industry?: SortOrder
    tone?: SortOrder
    generated_text?: SortOrder
    job_description?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type LinkedinOptimizationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    goal?: SortOrder
    industry?: SortOrder
    tone?: SortOrder
    generated_text?: SortOrder
    job_description?: SortOrder
    tailoring_mode?: SortOrder
    created_at?: SortOrder
  }

  export type SavedResumeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
  }

  export type SavedResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
  }

  export type SavedResumeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    label?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    tailoring_mode?: SortOrder
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsAvgOrderByAggregateInput = {
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
  }

  export type TailoringAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    tailoring_mode?: SortOrder
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    tailoring_mode?: SortOrder
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsSumOrderByAggregateInput = {
    iterations?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
  }

  export type InterviewSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_title?: SortOrder
    job_description?: SortOrder
    difficulty?: SortOrder
    mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InterviewSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_title?: SortOrder
    job_description?: SortOrder
    difficulty?: SortOrder
    mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InterviewSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_title?: SortOrder
    job_description?: SortOrder
    difficulty?: SortOrder
    mode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type CoverLetterCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type LinkedinOptimizationCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput> | LinkedinOptimizationCreateWithoutUserInput[] | LinkedinOptimizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutUserInput | LinkedinOptimizationCreateOrConnectWithoutUserInput[]
    createMany?: LinkedinOptimizationCreateManyUserInputEnvelope
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
  }

  export type SavedResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput> | SavedResumeCreateWithoutUserInput[] | SavedResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutUserInput | SavedResumeCreateOrConnectWithoutUserInput[]
    createMany?: SavedResumeCreateManyUserInputEnvelope
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
  }

  export type TailoringAnalyticsCreateNestedManyWithoutUserInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput> | TailoringAnalyticsCreateWithoutUserInput[] | TailoringAnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutUserInput | TailoringAnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: TailoringAnalyticsCreateManyUserInputEnvelope
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
  }

  export type InterviewSettingsCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput> | InterviewSettingsCreateWithoutUserInput[] | InterviewSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewSettingsCreateOrConnectWithoutUserInput | InterviewSettingsCreateOrConnectWithoutUserInput[]
    createMany?: InterviewSettingsCreateManyUserInputEnvelope
    connect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type CoverLetterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput> | LinkedinOptimizationCreateWithoutUserInput[] | LinkedinOptimizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutUserInput | LinkedinOptimizationCreateOrConnectWithoutUserInput[]
    createMany?: LinkedinOptimizationCreateManyUserInputEnvelope
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
  }

  export type SavedResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput> | SavedResumeCreateWithoutUserInput[] | SavedResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutUserInput | SavedResumeCreateOrConnectWithoutUserInput[]
    createMany?: SavedResumeCreateManyUserInputEnvelope
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
  }

  export type TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput> | TailoringAnalyticsCreateWithoutUserInput[] | TailoringAnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutUserInput | TailoringAnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: TailoringAnalyticsCreateManyUserInputEnvelope
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
  }

  export type InterviewSettingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput> | InterviewSettingsCreateWithoutUserInput[] | InterviewSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewSettingsCreateOrConnectWithoutUserInput | InterviewSettingsCreateOrConnectWithoutUserInput[]
    createMany?: InterviewSettingsCreateManyUserInputEnvelope
    connect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type CoverLetterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type LinkedinOptimizationUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput> | LinkedinOptimizationCreateWithoutUserInput[] | LinkedinOptimizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutUserInput | LinkedinOptimizationCreateOrConnectWithoutUserInput[]
    upsert?: LinkedinOptimizationUpsertWithWhereUniqueWithoutUserInput | LinkedinOptimizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedinOptimizationCreateManyUserInputEnvelope
    set?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    disconnect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    delete?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    update?: LinkedinOptimizationUpdateWithWhereUniqueWithoutUserInput | LinkedinOptimizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedinOptimizationUpdateManyWithWhereWithoutUserInput | LinkedinOptimizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
  }

  export type SavedResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput> | SavedResumeCreateWithoutUserInput[] | SavedResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutUserInput | SavedResumeCreateOrConnectWithoutUserInput[]
    upsert?: SavedResumeUpsertWithWhereUniqueWithoutUserInput | SavedResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedResumeCreateManyUserInputEnvelope
    set?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    disconnect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    delete?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    update?: SavedResumeUpdateWithWhereUniqueWithoutUserInput | SavedResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedResumeUpdateManyWithWhereWithoutUserInput | SavedResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
  }

  export type TailoringAnalyticsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput> | TailoringAnalyticsCreateWithoutUserInput[] | TailoringAnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutUserInput | TailoringAnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: TailoringAnalyticsUpsertWithWhereUniqueWithoutUserInput | TailoringAnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TailoringAnalyticsCreateManyUserInputEnvelope
    set?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    disconnect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    delete?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    update?: TailoringAnalyticsUpdateWithWhereUniqueWithoutUserInput | TailoringAnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TailoringAnalyticsUpdateManyWithWhereWithoutUserInput | TailoringAnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
  }

  export type InterviewSettingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput> | InterviewSettingsCreateWithoutUserInput[] | InterviewSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewSettingsCreateOrConnectWithoutUserInput | InterviewSettingsCreateOrConnectWithoutUserInput[]
    upsert?: InterviewSettingsUpsertWithWhereUniqueWithoutUserInput | InterviewSettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewSettingsCreateManyUserInputEnvelope
    set?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    disconnect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    delete?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    connect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    update?: InterviewSettingsUpdateWithWhereUniqueWithoutUserInput | InterviewSettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewSettingsUpdateManyWithWhereWithoutUserInput | InterviewSettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewSettingsScalarWhereInput | InterviewSettingsScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput> | CoverLetterCreateWithoutUserInput[] | CoverLetterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutUserInput | CoverLetterCreateOrConnectWithoutUserInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutUserInput | CoverLetterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoverLetterCreateManyUserInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutUserInput | CoverLetterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutUserInput | CoverLetterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput> | LinkedinOptimizationCreateWithoutUserInput[] | LinkedinOptimizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutUserInput | LinkedinOptimizationCreateOrConnectWithoutUserInput[]
    upsert?: LinkedinOptimizationUpsertWithWhereUniqueWithoutUserInput | LinkedinOptimizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedinOptimizationCreateManyUserInputEnvelope
    set?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    disconnect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    delete?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    update?: LinkedinOptimizationUpdateWithWhereUniqueWithoutUserInput | LinkedinOptimizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedinOptimizationUpdateManyWithWhereWithoutUserInput | LinkedinOptimizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
  }

  export type SavedResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput> | SavedResumeCreateWithoutUserInput[] | SavedResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutUserInput | SavedResumeCreateOrConnectWithoutUserInput[]
    upsert?: SavedResumeUpsertWithWhereUniqueWithoutUserInput | SavedResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedResumeCreateManyUserInputEnvelope
    set?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    disconnect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    delete?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    update?: SavedResumeUpdateWithWhereUniqueWithoutUserInput | SavedResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedResumeUpdateManyWithWhereWithoutUserInput | SavedResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
  }

  export type TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput> | TailoringAnalyticsCreateWithoutUserInput[] | TailoringAnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutUserInput | TailoringAnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: TailoringAnalyticsUpsertWithWhereUniqueWithoutUserInput | TailoringAnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TailoringAnalyticsCreateManyUserInputEnvelope
    set?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    disconnect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    delete?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    update?: TailoringAnalyticsUpdateWithWhereUniqueWithoutUserInput | TailoringAnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TailoringAnalyticsUpdateManyWithWhereWithoutUserInput | TailoringAnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
  }

  export type InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput> | InterviewSettingsCreateWithoutUserInput[] | InterviewSettingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterviewSettingsCreateOrConnectWithoutUserInput | InterviewSettingsCreateOrConnectWithoutUserInput[]
    upsert?: InterviewSettingsUpsertWithWhereUniqueWithoutUserInput | InterviewSettingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterviewSettingsCreateManyUserInputEnvelope
    set?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    disconnect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    delete?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    connect?: InterviewSettingsWhereUniqueInput | InterviewSettingsWhereUniqueInput[]
    update?: InterviewSettingsUpdateWithWhereUniqueWithoutUserInput | InterviewSettingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterviewSettingsUpdateManyWithWhereWithoutUserInput | InterviewSettingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterviewSettingsScalarWhereInput | InterviewSettingsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type CoverLetterCreateNestedManyWithoutResumeInput = {
    create?: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput> | CoverLetterCreateWithoutResumeInput[] | CoverLetterUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutResumeInput | CoverLetterCreateOrConnectWithoutResumeInput[]
    createMany?: CoverLetterCreateManyResumeInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type LinkedinOptimizationCreateNestedManyWithoutResumeInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput> | LinkedinOptimizationCreateWithoutResumeInput[] | LinkedinOptimizationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutResumeInput | LinkedinOptimizationCreateOrConnectWithoutResumeInput[]
    createMany?: LinkedinOptimizationCreateManyResumeInputEnvelope
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
  }

  export type SavedResumeCreateNestedManyWithoutResumeInput = {
    create?: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput> | SavedResumeCreateWithoutResumeInput[] | SavedResumeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutResumeInput | SavedResumeCreateOrConnectWithoutResumeInput[]
    createMany?: SavedResumeCreateManyResumeInputEnvelope
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
  }

  export type TailoringAnalyticsCreateNestedManyWithoutResumeInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput> | TailoringAnalyticsCreateWithoutResumeInput[] | TailoringAnalyticsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutResumeInput | TailoringAnalyticsCreateOrConnectWithoutResumeInput[]
    createMany?: TailoringAnalyticsCreateManyResumeInputEnvelope
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
  }

  export type CoverLetterUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput> | CoverLetterCreateWithoutResumeInput[] | CoverLetterUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutResumeInput | CoverLetterCreateOrConnectWithoutResumeInput[]
    createMany?: CoverLetterCreateManyResumeInputEnvelope
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
  }

  export type LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput> | LinkedinOptimizationCreateWithoutResumeInput[] | LinkedinOptimizationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutResumeInput | LinkedinOptimizationCreateOrConnectWithoutResumeInput[]
    createMany?: LinkedinOptimizationCreateManyResumeInputEnvelope
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
  }

  export type SavedResumeUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput> | SavedResumeCreateWithoutResumeInput[] | SavedResumeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutResumeInput | SavedResumeCreateOrConnectWithoutResumeInput[]
    createMany?: SavedResumeCreateManyResumeInputEnvelope
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
  }

  export type TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput> | TailoringAnalyticsCreateWithoutResumeInput[] | TailoringAnalyticsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutResumeInput | TailoringAnalyticsCreateOrConnectWithoutResumeInput[]
    createMany?: TailoringAnalyticsCreateManyResumeInputEnvelope
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type CoverLetterUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput> | CoverLetterCreateWithoutResumeInput[] | CoverLetterUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutResumeInput | CoverLetterCreateOrConnectWithoutResumeInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutResumeInput | CoverLetterUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CoverLetterCreateManyResumeInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutResumeInput | CoverLetterUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutResumeInput | CoverLetterUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type LinkedinOptimizationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput> | LinkedinOptimizationCreateWithoutResumeInput[] | LinkedinOptimizationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutResumeInput | LinkedinOptimizationCreateOrConnectWithoutResumeInput[]
    upsert?: LinkedinOptimizationUpsertWithWhereUniqueWithoutResumeInput | LinkedinOptimizationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: LinkedinOptimizationCreateManyResumeInputEnvelope
    set?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    disconnect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    delete?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    update?: LinkedinOptimizationUpdateWithWhereUniqueWithoutResumeInput | LinkedinOptimizationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: LinkedinOptimizationUpdateManyWithWhereWithoutResumeInput | LinkedinOptimizationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
  }

  export type SavedResumeUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput> | SavedResumeCreateWithoutResumeInput[] | SavedResumeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutResumeInput | SavedResumeCreateOrConnectWithoutResumeInput[]
    upsert?: SavedResumeUpsertWithWhereUniqueWithoutResumeInput | SavedResumeUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SavedResumeCreateManyResumeInputEnvelope
    set?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    disconnect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    delete?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    update?: SavedResumeUpdateWithWhereUniqueWithoutResumeInput | SavedResumeUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SavedResumeUpdateManyWithWhereWithoutResumeInput | SavedResumeUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
  }

  export type TailoringAnalyticsUpdateManyWithoutResumeNestedInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput> | TailoringAnalyticsCreateWithoutResumeInput[] | TailoringAnalyticsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutResumeInput | TailoringAnalyticsCreateOrConnectWithoutResumeInput[]
    upsert?: TailoringAnalyticsUpsertWithWhereUniqueWithoutResumeInput | TailoringAnalyticsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: TailoringAnalyticsCreateManyResumeInputEnvelope
    set?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    disconnect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    delete?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    update?: TailoringAnalyticsUpdateWithWhereUniqueWithoutResumeInput | TailoringAnalyticsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: TailoringAnalyticsUpdateManyWithWhereWithoutResumeInput | TailoringAnalyticsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
  }

  export type CoverLetterUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput> | CoverLetterCreateWithoutResumeInput[] | CoverLetterUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CoverLetterCreateOrConnectWithoutResumeInput | CoverLetterCreateOrConnectWithoutResumeInput[]
    upsert?: CoverLetterUpsertWithWhereUniqueWithoutResumeInput | CoverLetterUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CoverLetterCreateManyResumeInputEnvelope
    set?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    disconnect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    delete?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    connect?: CoverLetterWhereUniqueInput | CoverLetterWhereUniqueInput[]
    update?: CoverLetterUpdateWithWhereUniqueWithoutResumeInput | CoverLetterUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CoverLetterUpdateManyWithWhereWithoutResumeInput | CoverLetterUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
  }

  export type LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput> | LinkedinOptimizationCreateWithoutResumeInput[] | LinkedinOptimizationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: LinkedinOptimizationCreateOrConnectWithoutResumeInput | LinkedinOptimizationCreateOrConnectWithoutResumeInput[]
    upsert?: LinkedinOptimizationUpsertWithWhereUniqueWithoutResumeInput | LinkedinOptimizationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: LinkedinOptimizationCreateManyResumeInputEnvelope
    set?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    disconnect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    delete?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    connect?: LinkedinOptimizationWhereUniqueInput | LinkedinOptimizationWhereUniqueInput[]
    update?: LinkedinOptimizationUpdateWithWhereUniqueWithoutResumeInput | LinkedinOptimizationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: LinkedinOptimizationUpdateManyWithWhereWithoutResumeInput | LinkedinOptimizationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
  }

  export type SavedResumeUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput> | SavedResumeCreateWithoutResumeInput[] | SavedResumeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SavedResumeCreateOrConnectWithoutResumeInput | SavedResumeCreateOrConnectWithoutResumeInput[]
    upsert?: SavedResumeUpsertWithWhereUniqueWithoutResumeInput | SavedResumeUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SavedResumeCreateManyResumeInputEnvelope
    set?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    disconnect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    delete?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    connect?: SavedResumeWhereUniqueInput | SavedResumeWhereUniqueInput[]
    update?: SavedResumeUpdateWithWhereUniqueWithoutResumeInput | SavedResumeUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SavedResumeUpdateManyWithWhereWithoutResumeInput | SavedResumeUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
  }

  export type TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput> | TailoringAnalyticsCreateWithoutResumeInput[] | TailoringAnalyticsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: TailoringAnalyticsCreateOrConnectWithoutResumeInput | TailoringAnalyticsCreateOrConnectWithoutResumeInput[]
    upsert?: TailoringAnalyticsUpsertWithWhereUniqueWithoutResumeInput | TailoringAnalyticsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: TailoringAnalyticsCreateManyResumeInputEnvelope
    set?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    disconnect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    delete?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    connect?: TailoringAnalyticsWhereUniqueInput | TailoringAnalyticsWhereUniqueInput[]
    update?: TailoringAnalyticsUpdateWithWhereUniqueWithoutResumeInput | TailoringAnalyticsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: TailoringAnalyticsUpdateManyWithWhereWithoutResumeInput | TailoringAnalyticsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoverLettersInput = {
    create?: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLettersInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutCoverLettersInput = {
    create?: XOR<ResumeCreateWithoutCoverLettersInput, ResumeUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCoverLettersInput
    connect?: ResumeWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutCoverLettersNestedInput = {
    create?: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoverLettersInput
    upsert?: UserUpsertWithoutCoverLettersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoverLettersInput, UserUpdateWithoutCoverLettersInput>, UserUncheckedUpdateWithoutCoverLettersInput>
  }

  export type ResumeUpdateOneRequiredWithoutCoverLettersNestedInput = {
    create?: XOR<ResumeCreateWithoutCoverLettersInput, ResumeUncheckedCreateWithoutCoverLettersInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCoverLettersInput
    upsert?: ResumeUpsertWithoutCoverLettersInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutCoverLettersInput, ResumeUpdateWithoutCoverLettersInput>, ResumeUncheckedUpdateWithoutCoverLettersInput>
  }

  export type UserCreateNestedOneWithoutLinkedinOptimizationsInput = {
    create?: XOR<UserCreateWithoutLinkedinOptimizationsInput, UserUncheckedCreateWithoutLinkedinOptimizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedinOptimizationsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutLinkedinOptimizationsInput = {
    create?: XOR<ResumeCreateWithoutLinkedinOptimizationsInput, ResumeUncheckedCreateWithoutLinkedinOptimizationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutLinkedinOptimizationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput = {
    create?: XOR<UserCreateWithoutLinkedinOptimizationsInput, UserUncheckedCreateWithoutLinkedinOptimizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedinOptimizationsInput
    upsert?: UserUpsertWithoutLinkedinOptimizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedinOptimizationsInput, UserUpdateWithoutLinkedinOptimizationsInput>, UserUncheckedUpdateWithoutLinkedinOptimizationsInput>
  }

  export type ResumeUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput = {
    create?: XOR<ResumeCreateWithoutLinkedinOptimizationsInput, ResumeUncheckedCreateWithoutLinkedinOptimizationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutLinkedinOptimizationsInput
    upsert?: ResumeUpsertWithoutLinkedinOptimizationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutLinkedinOptimizationsInput, ResumeUpdateWithoutLinkedinOptimizationsInput>, ResumeUncheckedUpdateWithoutLinkedinOptimizationsInput>
  }

  export type UserCreateNestedOneWithoutSavedResumesInput = {
    create?: XOR<UserCreateWithoutSavedResumesInput, UserUncheckedCreateWithoutSavedResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedResumesInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutSavedResumesInput = {
    create?: XOR<ResumeCreateWithoutSavedResumesInput, ResumeUncheckedCreateWithoutSavedResumesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSavedResumesInput
    connect?: ResumeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedResumesNestedInput = {
    create?: XOR<UserCreateWithoutSavedResumesInput, UserUncheckedCreateWithoutSavedResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedResumesInput
    upsert?: UserUpsertWithoutSavedResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedResumesInput, UserUpdateWithoutSavedResumesInput>, UserUncheckedUpdateWithoutSavedResumesInput>
  }

  export type ResumeUpdateOneRequiredWithoutSavedResumesNestedInput = {
    create?: XOR<ResumeCreateWithoutSavedResumesInput, ResumeUncheckedCreateWithoutSavedResumesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSavedResumesInput
    upsert?: ResumeUpsertWithoutSavedResumesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSavedResumesInput, ResumeUpdateWithoutSavedResumesInput>, ResumeUncheckedUpdateWithoutSavedResumesInput>
  }

  export type UserCreateNestedOneWithoutTailoringAnalyticsInput = {
    create?: XOR<UserCreateWithoutTailoringAnalyticsInput, UserUncheckedCreateWithoutTailoringAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTailoringAnalyticsInput
    connect?: UserWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutTailoringAnalyticsInput = {
    create?: XOR<ResumeCreateWithoutTailoringAnalyticsInput, ResumeUncheckedCreateWithoutTailoringAnalyticsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutTailoringAnalyticsInput
    connect?: ResumeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTailoringAnalyticsNestedInput = {
    create?: XOR<UserCreateWithoutTailoringAnalyticsInput, UserUncheckedCreateWithoutTailoringAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTailoringAnalyticsInput
    upsert?: UserUpsertWithoutTailoringAnalyticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTailoringAnalyticsInput, UserUpdateWithoutTailoringAnalyticsInput>, UserUncheckedUpdateWithoutTailoringAnalyticsInput>
  }

  export type ResumeUpdateOneRequiredWithoutTailoringAnalyticsNestedInput = {
    create?: XOR<ResumeCreateWithoutTailoringAnalyticsInput, ResumeUncheckedCreateWithoutTailoringAnalyticsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutTailoringAnalyticsInput
    upsert?: ResumeUpsertWithoutTailoringAnalyticsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutTailoringAnalyticsInput, ResumeUpdateWithoutTailoringAnalyticsInput>, ResumeUncheckedUpdateWithoutTailoringAnalyticsInput>
  }

  export type UserCreateNestedOneWithoutInterviewSettingsInput = {
    create?: XOR<UserCreateWithoutInterviewSettingsInput, UserUncheckedCreateWithoutInterviewSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterviewSettingsNestedInput = {
    create?: XOR<UserCreateWithoutInterviewSettingsInput, UserUncheckedCreateWithoutInterviewSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterviewSettingsInput
    upsert?: UserUpsertWithoutInterviewSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterviewSettingsInput, UserUpdateWithoutInterviewSettingsInput>, UserUncheckedUpdateWithoutInterviewSettingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoverLetterCreateWithoutUserInput = {
    id?: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
    resume: ResumeCreateNestedOneWithoutCoverLettersInput
  }

  export type CoverLetterUncheckedCreateWithoutUserInput = {
    id?: string
    original_resume_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type CoverLetterCreateOrConnectWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterCreateManyUserInputEnvelope = {
    data: CoverLetterCreateManyUserInput | CoverLetterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkedinOptimizationCreateWithoutUserInput = {
    id?: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
    resume: ResumeCreateNestedOneWithoutLinkedinOptimizationsInput
  }

  export type LinkedinOptimizationUncheckedCreateWithoutUserInput = {
    id?: string
    resume_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type LinkedinOptimizationCreateOrConnectWithoutUserInput = {
    where: LinkedinOptimizationWhereUniqueInput
    create: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput>
  }

  export type LinkedinOptimizationCreateManyUserInputEnvelope = {
    data: LinkedinOptimizationCreateManyUserInput | LinkedinOptimizationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedResumeCreateWithoutUserInput = {
    id?: string
    label?: string | null
    created_at?: Date | string
    resume: ResumeCreateNestedOneWithoutSavedResumesInput
  }

  export type SavedResumeUncheckedCreateWithoutUserInput = {
    id?: string
    resume_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type SavedResumeCreateOrConnectWithoutUserInput = {
    where: SavedResumeWhereUniqueInput
    create: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput>
  }

  export type SavedResumeCreateManyUserInputEnvelope = {
    data: SavedResumeCreateManyUserInput | SavedResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TailoringAnalyticsCreateWithoutUserInput = {
    id?: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
    resume: ResumeCreateNestedOneWithoutTailoringAnalyticsInput
  }

  export type TailoringAnalyticsUncheckedCreateWithoutUserInput = {
    id?: string
    resume_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsCreateOrConnectWithoutUserInput = {
    where: TailoringAnalyticsWhereUniqueInput
    create: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput>
  }

  export type TailoringAnalyticsCreateManyUserInputEnvelope = {
    data: TailoringAnalyticsCreateManyUserInput | TailoringAnalyticsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterviewSettingsCreateWithoutUserInput = {
    id?: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InterviewSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InterviewSettingsCreateOrConnectWithoutUserInput = {
    where: InterviewSettingsWhereUniqueInput
    create: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput>
  }

  export type InterviewSettingsCreateManyUserInputEnvelope = {
    data: InterviewSettingsCreateManyUserInput | InterviewSettingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    user_id?: StringFilter<"Resume"> | string
    resume_text?: StringFilter<"Resume"> | string
    job_description?: StringFilter<"Resume"> | string
    modified_resume?: StringNullableFilter<"Resume"> | string | null
    ats_score?: IntNullableFilter<"Resume"> | number | null
    jd_score?: IntNullableFilter<"Resume"> | number | null
    version?: IntFilter<"Resume"> | number
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
  }

  export type CoverLetterUpsertWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    update: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
    create: XOR<CoverLetterCreateWithoutUserInput, CoverLetterUncheckedCreateWithoutUserInput>
  }

  export type CoverLetterUpdateWithWhereUniqueWithoutUserInput = {
    where: CoverLetterWhereUniqueInput
    data: XOR<CoverLetterUpdateWithoutUserInput, CoverLetterUncheckedUpdateWithoutUserInput>
  }

  export type CoverLetterUpdateManyWithWhereWithoutUserInput = {
    where: CoverLetterScalarWhereInput
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyWithoutUserInput>
  }

  export type CoverLetterScalarWhereInput = {
    AND?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    OR?: CoverLetterScalarWhereInput[]
    NOT?: CoverLetterScalarWhereInput | CoverLetterScalarWhereInput[]
    id?: StringFilter<"CoverLetter"> | string
    user_id?: StringFilter<"CoverLetter"> | string
    original_resume_id?: StringFilter<"CoverLetter"> | string
    job_description?: StringFilter<"CoverLetter"> | string
    generated_letter?: StringFilter<"CoverLetter"> | string
    explanation?: StringNullableFilter<"CoverLetter"> | string | null
    score?: IntNullableFilter<"CoverLetter"> | number | null
    feedback?: StringNullableFilter<"CoverLetter"> | string | null
    golden_passed?: BoolNullableFilter<"CoverLetter"> | boolean | null
    tailoring_mode?: StringFilter<"CoverLetter"> | string
    version?: IntFilter<"CoverLetter"> | number
    created_at?: DateTimeFilter<"CoverLetter"> | Date | string
  }

  export type LinkedinOptimizationUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkedinOptimizationWhereUniqueInput
    update: XOR<LinkedinOptimizationUpdateWithoutUserInput, LinkedinOptimizationUncheckedUpdateWithoutUserInput>
    create: XOR<LinkedinOptimizationCreateWithoutUserInput, LinkedinOptimizationUncheckedCreateWithoutUserInput>
  }

  export type LinkedinOptimizationUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkedinOptimizationWhereUniqueInput
    data: XOR<LinkedinOptimizationUpdateWithoutUserInput, LinkedinOptimizationUncheckedUpdateWithoutUserInput>
  }

  export type LinkedinOptimizationUpdateManyWithWhereWithoutUserInput = {
    where: LinkedinOptimizationScalarWhereInput
    data: XOR<LinkedinOptimizationUpdateManyMutationInput, LinkedinOptimizationUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkedinOptimizationScalarWhereInput = {
    AND?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
    OR?: LinkedinOptimizationScalarWhereInput[]
    NOT?: LinkedinOptimizationScalarWhereInput | LinkedinOptimizationScalarWhereInput[]
    id?: StringFilter<"LinkedinOptimization"> | string
    user_id?: StringFilter<"LinkedinOptimization"> | string
    resume_id?: StringFilter<"LinkedinOptimization"> | string
    original_text?: StringFilter<"LinkedinOptimization"> | string
    goal?: StringFilter<"LinkedinOptimization"> | string
    industry?: StringFilter<"LinkedinOptimization"> | string
    tone?: StringFilter<"LinkedinOptimization"> | string
    generated_text?: StringFilter<"LinkedinOptimization"> | string
    job_description?: StringFilter<"LinkedinOptimization"> | string
    tailoring_mode?: StringFilter<"LinkedinOptimization"> | string
    created_at?: DateTimeFilter<"LinkedinOptimization"> | Date | string
  }

  export type SavedResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedResumeWhereUniqueInput
    update: XOR<SavedResumeUpdateWithoutUserInput, SavedResumeUncheckedUpdateWithoutUserInput>
    create: XOR<SavedResumeCreateWithoutUserInput, SavedResumeUncheckedCreateWithoutUserInput>
  }

  export type SavedResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedResumeWhereUniqueInput
    data: XOR<SavedResumeUpdateWithoutUserInput, SavedResumeUncheckedUpdateWithoutUserInput>
  }

  export type SavedResumeUpdateManyWithWhereWithoutUserInput = {
    where: SavedResumeScalarWhereInput
    data: XOR<SavedResumeUpdateManyMutationInput, SavedResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedResumeScalarWhereInput = {
    AND?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
    OR?: SavedResumeScalarWhereInput[]
    NOT?: SavedResumeScalarWhereInput | SavedResumeScalarWhereInput[]
    id?: StringFilter<"SavedResume"> | string
    user_id?: StringFilter<"SavedResume"> | string
    resume_id?: StringFilter<"SavedResume"> | string
    label?: StringNullableFilter<"SavedResume"> | string | null
    created_at?: DateTimeFilter<"SavedResume"> | Date | string
  }

  export type TailoringAnalyticsUpsertWithWhereUniqueWithoutUserInput = {
    where: TailoringAnalyticsWhereUniqueInput
    update: XOR<TailoringAnalyticsUpdateWithoutUserInput, TailoringAnalyticsUncheckedUpdateWithoutUserInput>
    create: XOR<TailoringAnalyticsCreateWithoutUserInput, TailoringAnalyticsUncheckedCreateWithoutUserInput>
  }

  export type TailoringAnalyticsUpdateWithWhereUniqueWithoutUserInput = {
    where: TailoringAnalyticsWhereUniqueInput
    data: XOR<TailoringAnalyticsUpdateWithoutUserInput, TailoringAnalyticsUncheckedUpdateWithoutUserInput>
  }

  export type TailoringAnalyticsUpdateManyWithWhereWithoutUserInput = {
    where: TailoringAnalyticsScalarWhereInput
    data: XOR<TailoringAnalyticsUpdateManyMutationInput, TailoringAnalyticsUncheckedUpdateManyWithoutUserInput>
  }

  export type TailoringAnalyticsScalarWhereInput = {
    AND?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
    OR?: TailoringAnalyticsScalarWhereInput[]
    NOT?: TailoringAnalyticsScalarWhereInput | TailoringAnalyticsScalarWhereInput[]
    id?: StringFilter<"TailoringAnalytics"> | string
    user_id?: StringFilter<"TailoringAnalytics"> | string
    resume_id?: StringFilter<"TailoringAnalytics"> | string
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    iterations?: IntFilter<"TailoringAnalytics"> | number
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
  }

  export type InterviewSettingsUpsertWithWhereUniqueWithoutUserInput = {
    where: InterviewSettingsWhereUniqueInput
    update: XOR<InterviewSettingsUpdateWithoutUserInput, InterviewSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<InterviewSettingsCreateWithoutUserInput, InterviewSettingsUncheckedCreateWithoutUserInput>
  }

  export type InterviewSettingsUpdateWithWhereUniqueWithoutUserInput = {
    where: InterviewSettingsWhereUniqueInput
    data: XOR<InterviewSettingsUpdateWithoutUserInput, InterviewSettingsUncheckedUpdateWithoutUserInput>
  }

  export type InterviewSettingsUpdateManyWithWhereWithoutUserInput = {
    where: InterviewSettingsScalarWhereInput
    data: XOR<InterviewSettingsUpdateManyMutationInput, InterviewSettingsUncheckedUpdateManyWithoutUserInput>
  }

  export type InterviewSettingsScalarWhereInput = {
    AND?: InterviewSettingsScalarWhereInput | InterviewSettingsScalarWhereInput[]
    OR?: InterviewSettingsScalarWhereInput[]
    NOT?: InterviewSettingsScalarWhereInput | InterviewSettingsScalarWhereInput[]
    id?: StringFilter<"InterviewSettings"> | string
    user_id?: StringFilter<"InterviewSettings"> | string
    job_title?: StringFilter<"InterviewSettings"> | string
    job_description?: StringFilter<"InterviewSettings"> | string
    difficulty?: StringFilter<"InterviewSettings"> | string
    mode?: StringFilter<"InterviewSettings"> | string
    created_at?: DateTimeFilter<"InterviewSettings"> | Date | string
    updated_at?: DateTimeFilter<"InterviewSettings"> | Date | string
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type CoverLetterCreateWithoutResumeInput = {
    id?: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutCoverLettersInput
  }

  export type CoverLetterUncheckedCreateWithoutResumeInput = {
    id?: string
    user_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type CoverLetterCreateOrConnectWithoutResumeInput = {
    where: CoverLetterWhereUniqueInput
    create: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput>
  }

  export type CoverLetterCreateManyResumeInputEnvelope = {
    data: CoverLetterCreateManyResumeInput | CoverLetterCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type LinkedinOptimizationCreateWithoutResumeInput = {
    id?: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutLinkedinOptimizationsInput
  }

  export type LinkedinOptimizationUncheckedCreateWithoutResumeInput = {
    id?: string
    user_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type LinkedinOptimizationCreateOrConnectWithoutResumeInput = {
    where: LinkedinOptimizationWhereUniqueInput
    create: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput>
  }

  export type LinkedinOptimizationCreateManyResumeInputEnvelope = {
    data: LinkedinOptimizationCreateManyResumeInput | LinkedinOptimizationCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type SavedResumeCreateWithoutResumeInput = {
    id?: string
    label?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSavedResumesInput
  }

  export type SavedResumeUncheckedCreateWithoutResumeInput = {
    id?: string
    user_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type SavedResumeCreateOrConnectWithoutResumeInput = {
    where: SavedResumeWhereUniqueInput
    create: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput>
  }

  export type SavedResumeCreateManyResumeInputEnvelope = {
    data: SavedResumeCreateManyResumeInput | SavedResumeCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type TailoringAnalyticsCreateWithoutResumeInput = {
    id?: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTailoringAnalyticsInput
  }

  export type TailoringAnalyticsUncheckedCreateWithoutResumeInput = {
    id?: string
    user_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsCreateOrConnectWithoutResumeInput = {
    where: TailoringAnalyticsWhereUniqueInput
    create: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput>
  }

  export type TailoringAnalyticsCreateManyResumeInputEnvelope = {
    data: TailoringAnalyticsCreateManyResumeInput | TailoringAnalyticsCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoverLetterUpsertWithWhereUniqueWithoutResumeInput = {
    where: CoverLetterWhereUniqueInput
    update: XOR<CoverLetterUpdateWithoutResumeInput, CoverLetterUncheckedUpdateWithoutResumeInput>
    create: XOR<CoverLetterCreateWithoutResumeInput, CoverLetterUncheckedCreateWithoutResumeInput>
  }

  export type CoverLetterUpdateWithWhereUniqueWithoutResumeInput = {
    where: CoverLetterWhereUniqueInput
    data: XOR<CoverLetterUpdateWithoutResumeInput, CoverLetterUncheckedUpdateWithoutResumeInput>
  }

  export type CoverLetterUpdateManyWithWhereWithoutResumeInput = {
    where: CoverLetterScalarWhereInput
    data: XOR<CoverLetterUpdateManyMutationInput, CoverLetterUncheckedUpdateManyWithoutResumeInput>
  }

  export type LinkedinOptimizationUpsertWithWhereUniqueWithoutResumeInput = {
    where: LinkedinOptimizationWhereUniqueInput
    update: XOR<LinkedinOptimizationUpdateWithoutResumeInput, LinkedinOptimizationUncheckedUpdateWithoutResumeInput>
    create: XOR<LinkedinOptimizationCreateWithoutResumeInput, LinkedinOptimizationUncheckedCreateWithoutResumeInput>
  }

  export type LinkedinOptimizationUpdateWithWhereUniqueWithoutResumeInput = {
    where: LinkedinOptimizationWhereUniqueInput
    data: XOR<LinkedinOptimizationUpdateWithoutResumeInput, LinkedinOptimizationUncheckedUpdateWithoutResumeInput>
  }

  export type LinkedinOptimizationUpdateManyWithWhereWithoutResumeInput = {
    where: LinkedinOptimizationScalarWhereInput
    data: XOR<LinkedinOptimizationUpdateManyMutationInput, LinkedinOptimizationUncheckedUpdateManyWithoutResumeInput>
  }

  export type SavedResumeUpsertWithWhereUniqueWithoutResumeInput = {
    where: SavedResumeWhereUniqueInput
    update: XOR<SavedResumeUpdateWithoutResumeInput, SavedResumeUncheckedUpdateWithoutResumeInput>
    create: XOR<SavedResumeCreateWithoutResumeInput, SavedResumeUncheckedCreateWithoutResumeInput>
  }

  export type SavedResumeUpdateWithWhereUniqueWithoutResumeInput = {
    where: SavedResumeWhereUniqueInput
    data: XOR<SavedResumeUpdateWithoutResumeInput, SavedResumeUncheckedUpdateWithoutResumeInput>
  }

  export type SavedResumeUpdateManyWithWhereWithoutResumeInput = {
    where: SavedResumeScalarWhereInput
    data: XOR<SavedResumeUpdateManyMutationInput, SavedResumeUncheckedUpdateManyWithoutResumeInput>
  }

  export type TailoringAnalyticsUpsertWithWhereUniqueWithoutResumeInput = {
    where: TailoringAnalyticsWhereUniqueInput
    update: XOR<TailoringAnalyticsUpdateWithoutResumeInput, TailoringAnalyticsUncheckedUpdateWithoutResumeInput>
    create: XOR<TailoringAnalyticsCreateWithoutResumeInput, TailoringAnalyticsUncheckedCreateWithoutResumeInput>
  }

  export type TailoringAnalyticsUpdateWithWhereUniqueWithoutResumeInput = {
    where: TailoringAnalyticsWhereUniqueInput
    data: XOR<TailoringAnalyticsUpdateWithoutResumeInput, TailoringAnalyticsUncheckedUpdateWithoutResumeInput>
  }

  export type TailoringAnalyticsUpdateManyWithWhereWithoutResumeInput = {
    where: TailoringAnalyticsScalarWhereInput
    data: XOR<TailoringAnalyticsUpdateManyMutationInput, TailoringAnalyticsUncheckedUpdateManyWithoutResumeInput>
  }

  export type UserCreateWithoutCoverLettersInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoverLettersInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoverLettersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
  }

  export type ResumeCreateWithoutCoverLettersInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutCoverLettersInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutCoverLettersInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutCoverLettersInput, ResumeUncheckedCreateWithoutCoverLettersInput>
  }

  export type UserUpsertWithoutCoverLettersInput = {
    update: XOR<UserUpdateWithoutCoverLettersInput, UserUncheckedUpdateWithoutCoverLettersInput>
    create: XOR<UserCreateWithoutCoverLettersInput, UserUncheckedCreateWithoutCoverLettersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoverLettersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoverLettersInput, UserUncheckedUpdateWithoutCoverLettersInput>
  }

  export type UserUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutCoverLettersInput = {
    update: XOR<ResumeUpdateWithoutCoverLettersInput, ResumeUncheckedUpdateWithoutCoverLettersInput>
    create: XOR<ResumeCreateWithoutCoverLettersInput, ResumeUncheckedCreateWithoutCoverLettersInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutCoverLettersInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutCoverLettersInput, ResumeUncheckedUpdateWithoutCoverLettersInput>
  }

  export type ResumeUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutCoverLettersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutLinkedinOptimizationsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkedinOptimizationsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkedinOptimizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedinOptimizationsInput, UserUncheckedCreateWithoutLinkedinOptimizationsInput>
  }

  export type ResumeCreateWithoutLinkedinOptimizationsInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    coverLetters?: CoverLetterCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutLinkedinOptimizationsInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutLinkedinOptimizationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutLinkedinOptimizationsInput, ResumeUncheckedCreateWithoutLinkedinOptimizationsInput>
  }

  export type UserUpsertWithoutLinkedinOptimizationsInput = {
    update: XOR<UserUpdateWithoutLinkedinOptimizationsInput, UserUncheckedUpdateWithoutLinkedinOptimizationsInput>
    create: XOR<UserCreateWithoutLinkedinOptimizationsInput, UserUncheckedCreateWithoutLinkedinOptimizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedinOptimizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedinOptimizationsInput, UserUncheckedUpdateWithoutLinkedinOptimizationsInput>
  }

  export type UserUpdateWithoutLinkedinOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedinOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutLinkedinOptimizationsInput = {
    update: XOR<ResumeUpdateWithoutLinkedinOptimizationsInput, ResumeUncheckedUpdateWithoutLinkedinOptimizationsInput>
    create: XOR<ResumeCreateWithoutLinkedinOptimizationsInput, ResumeUncheckedCreateWithoutLinkedinOptimizationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutLinkedinOptimizationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutLinkedinOptimizationsInput, ResumeUncheckedUpdateWithoutLinkedinOptimizationsInput>
  }

  export type ResumeUpdateWithoutLinkedinOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutLinkedinOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutSavedResumesInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedResumesInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedResumesInput, UserUncheckedCreateWithoutSavedResumesInput>
  }

  export type ResumeCreateWithoutSavedResumesInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    coverLetters?: CoverLetterCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSavedResumesInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSavedResumesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSavedResumesInput, ResumeUncheckedCreateWithoutSavedResumesInput>
  }

  export type UserUpsertWithoutSavedResumesInput = {
    update: XOR<UserUpdateWithoutSavedResumesInput, UserUncheckedUpdateWithoutSavedResumesInput>
    create: XOR<UserCreateWithoutSavedResumesInput, UserUncheckedCreateWithoutSavedResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedResumesInput, UserUncheckedUpdateWithoutSavedResumesInput>
  }

  export type UserUpdateWithoutSavedResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutSavedResumesInput = {
    update: XOR<ResumeUpdateWithoutSavedResumesInput, ResumeUncheckedUpdateWithoutSavedResumesInput>
    create: XOR<ResumeCreateWithoutSavedResumesInput, ResumeUncheckedCreateWithoutSavedResumesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSavedResumesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSavedResumesInput, ResumeUncheckedUpdateWithoutSavedResumesInput>
  }

  export type ResumeUpdateWithoutSavedResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSavedResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutTailoringAnalyticsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTailoringAnalyticsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    interviewSettings?: InterviewSettingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTailoringAnalyticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTailoringAnalyticsInput, UserUncheckedCreateWithoutTailoringAnalyticsInput>
  }

  export type ResumeCreateWithoutTailoringAnalyticsInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
    coverLetters?: CoverLetterCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutTailoringAnalyticsInput = {
    id?: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutResumeInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutResumeInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutTailoringAnalyticsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutTailoringAnalyticsInput, ResumeUncheckedCreateWithoutTailoringAnalyticsInput>
  }

  export type UserUpsertWithoutTailoringAnalyticsInput = {
    update: XOR<UserUpdateWithoutTailoringAnalyticsInput, UserUncheckedUpdateWithoutTailoringAnalyticsInput>
    create: XOR<UserCreateWithoutTailoringAnalyticsInput, UserUncheckedCreateWithoutTailoringAnalyticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTailoringAnalyticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTailoringAnalyticsInput, UserUncheckedUpdateWithoutTailoringAnalyticsInput>
  }

  export type UserUpdateWithoutTailoringAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTailoringAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewSettings?: InterviewSettingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeUpsertWithoutTailoringAnalyticsInput = {
    update: XOR<ResumeUpdateWithoutTailoringAnalyticsInput, ResumeUncheckedUpdateWithoutTailoringAnalyticsInput>
    create: XOR<ResumeCreateWithoutTailoringAnalyticsInput, ResumeUncheckedCreateWithoutTailoringAnalyticsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutTailoringAnalyticsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutTailoringAnalyticsInput, ResumeUncheckedUpdateWithoutTailoringAnalyticsInput>
  }

  export type ResumeUpdateWithoutTailoringAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutTailoringAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type UserCreateWithoutInterviewSettingsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterviewSettingsInput = {
    id?: string
    email: string
    is_premium?: boolean
    tailoring_mode?: string | null
    created_at?: Date | string
    full_name?: string | null
    phone?: string | null
    country?: string | null
    linkedin?: string | null
    company?: string | null
    position?: string | null
    education?: string | null
    skills?: string | null
    bio?: string | null
    subscription_tier?: string | null
    subscription_end_date?: Date | string | null
    daily_basic_tailorings_used?: number
    daily_personalized_tailorings_used?: number
    daily_cover_letters_used?: number
    daily_linkedin_optimizations_used?: number
    daily_interview_sessions_used?: number
    daily_reset_date?: Date | string | null
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    coverLetters?: CoverLetterUncheckedCreateNestedManyWithoutUserInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedCreateNestedManyWithoutUserInput
    savedResumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterviewSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterviewSettingsInput, UserUncheckedCreateWithoutInterviewSettingsInput>
  }

  export type UserUpsertWithoutInterviewSettingsInput = {
    update: XOR<UserUpdateWithoutInterviewSettingsInput, UserUncheckedUpdateWithoutInterviewSettingsInput>
    create: XOR<UserCreateWithoutInterviewSettingsInput, UserUncheckedCreateWithoutInterviewSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterviewSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterviewSettingsInput, UserUncheckedUpdateWithoutInterviewSettingsInput>
  }

  export type UserUpdateWithoutInterviewSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterviewSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_premium?: BoolFieldUpdateOperationsInput | boolean
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_tier?: NullableStringFieldUpdateOperationsInput | string | null
    subscription_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    daily_basic_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_personalized_tailorings_used?: IntFieldUpdateOperationsInput | number
    daily_cover_letters_used?: IntFieldUpdateOperationsInput | number
    daily_linkedin_optimizations_used?: IntFieldUpdateOperationsInput | number
    daily_interview_sessions_used?: IntFieldUpdateOperationsInput | number
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutUserNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutUserNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type CoverLetterCreateManyUserInput = {
    id?: string
    original_resume_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type LinkedinOptimizationCreateManyUserInput = {
    id?: string
    resume_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type SavedResumeCreateManyUserInput = {
    id?: string
    resume_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type TailoringAnalyticsCreateManyUserInput = {
    id?: string
    resume_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type InterviewSettingsCreateManyUserInput = {
    id?: string
    job_title: string
    job_description: string
    difficulty: string
    mode: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    coverLetters?: CoverLetterUncheckedUpdateManyWithoutResumeNestedInput
    linkedinOptimizations?: LinkedinOptimizationUncheckedUpdateManyWithoutResumeNestedInput
    savedResumes?: SavedResumeUncheckedUpdateManyWithoutResumeNestedInput
    tailoringAnalytics?: TailoringAnalyticsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutCoverLettersNestedInput
  }

  export type CoverLetterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_resume_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_resume_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput
  }

  export type LinkedinOptimizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutSavedResumesNestedInput
  }

  export type SavedResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutTailoringAnalyticsNestedInput
  }

  export type TailoringAnalyticsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSettingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_title?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterCreateManyResumeInput = {
    id?: string
    user_id: string
    job_description: string
    generated_letter: string
    explanation?: string | null
    score?: number | null
    feedback?: string | null
    golden_passed?: boolean | null
    tailoring_mode: string
    version?: number
    created_at?: Date | string
  }

  export type LinkedinOptimizationCreateManyResumeInput = {
    id?: string
    user_id: string
    original_text: string
    goal: string
    industry: string
    tone: string
    generated_text: string
    job_description: string
    tailoring_mode: string
    created_at?: Date | string
  }

  export type SavedResumeCreateManyResumeInput = {
    id?: string
    user_id: string
    label?: string | null
    created_at?: Date | string
  }

  export type TailoringAnalyticsCreateManyResumeInput = {
    id?: string
    user_id: string
    tailoring_mode: string
    iterations: number
    ats_score: number
    jd_score: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type CoverLetterUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoverLettersNestedInput
  }

  export type CoverLetterUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverLetterUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    generated_letter?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    golden_passed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkedinOptimizationsNestedInput
  }

  export type LinkedinOptimizationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedinOptimizationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    generated_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedResumesNestedInput
  }

  export type SavedResumeUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTailoringAnalyticsNestedInput
  }

  export type TailoringAnalyticsUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    iterations?: IntFieldUpdateOperationsInput | number
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}