
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model ResumeEvent
 * 
 */
export type ResumeEvent = $Result.DefaultSelection<Prisma.$ResumeEventPayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model TailoringAnalytics
 * 
 */
export type TailoringAnalytics = $Result.DefaultSelection<Prisma.$TailoringAnalyticsPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model SavedResume
 * 
 */
export type SavedResume = $Result.DefaultSelection<Prisma.$SavedResumePayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * `prisma.resumeEvent`: Exposes CRUD operations for the **ResumeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeEvents
    * const resumeEvents = await prisma.resumeEvent.findMany()
    * ```
    */
  get resumeEvent(): Prisma.ResumeEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedResume`: Exposes CRUD operations for the **SavedResume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedResumes
    * const savedResumes = await prisma.savedResume.findMany()
    * ```
    */
  get savedResume(): Prisma.SavedResumeDelegate<ExtArgs, ClientOptions>;
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
    ResumeEvent: 'ResumeEvent',
    Interaction: 'Interaction',
    TailoringAnalytics: 'TailoringAnalytics',
    Resume: 'Resume',
    SavedResume: 'SavedResume'
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
      modelProps: "user" | "resumeEvent" | "interaction" | "tailoringAnalytics" | "resume" | "savedResume"
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
      ResumeEvent: {
        payload: Prisma.$ResumeEventPayload<ExtArgs>
        fields: Prisma.ResumeEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          findFirst: {
            args: Prisma.ResumeEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          findMany: {
            args: Prisma.ResumeEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>[]
          }
          create: {
            args: Prisma.ResumeEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          createMany: {
            args: Prisma.ResumeEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>[]
          }
          delete: {
            args: Prisma.ResumeEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          update: {
            args: Prisma.ResumeEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          deleteMany: {
            args: Prisma.ResumeEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>[]
          }
          upsert: {
            args: Prisma.ResumeEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEventPayload>
          }
          aggregate: {
            args: Prisma.ResumeEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeEvent>
          }
          groupBy: {
            args: Prisma.ResumeEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeEventCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeEventCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
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
    resumeEvent?: ResumeEventOmit
    interaction?: InteractionOmit
    tailoringAnalytics?: TailoringAnalyticsOmit
    resume?: ResumeOmit
    savedResume?: SavedResumeOmit
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
    interactions: number
    resume_events: number
    resumes: number
    saved_resumes: number
    tailoring_analytics: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
    resume_events?: boolean | UserCountOutputTypeCountResume_eventsArgs
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
    saved_resumes?: boolean | UserCountOutputTypeCountSaved_resumesArgs
    tailoring_analytics?: boolean | UserCountOutputTypeCountTailoring_analyticsArgs
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
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResume_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeEventWhereInput
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
  export type UserCountOutputTypeCountSaved_resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTailoring_analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type UserSumAggregateOutputType = {
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    anon_user_id: string | null
    updated_at: Date | null
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_reset_date: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    anon_user_id: string | null
    updated_at: Date | null
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
    daily_reset_date: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    anon_user_id: number
    updated_at: number
    daily_basic_tailorings_used: number
    daily_personalized_tailorings_used: number
    daily_cover_letters_used: number
    daily_reset_date: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
  }

  export type UserSumAggregateInputType = {
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    anon_user_id?: true
    updated_at?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_reset_date?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    anon_user_id?: true
    updated_at?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
    daily_reset_date?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    anon_user_id?: true
    updated_at?: true
    daily_basic_tailorings_used?: true
    daily_personalized_tailorings_used?: true
    daily_cover_letters_used?: true
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
    email: string | null
    anon_user_id: string
    updated_at: Date
    daily_basic_tailorings_used: number | null
    daily_personalized_tailorings_used: number | null
    daily_cover_letters_used: number | null
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
    anon_user_id?: boolean
    updated_at?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_reset_date?: boolean
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    resume_events?: boolean | User$resume_eventsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    saved_resumes?: boolean | User$saved_resumesArgs<ExtArgs>
    tailoring_analytics?: boolean | User$tailoring_analyticsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    anon_user_id?: boolean
    updated_at?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_reset_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    anon_user_id?: boolean
    updated_at?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_reset_date?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    anon_user_id?: boolean
    updated_at?: boolean
    daily_basic_tailorings_used?: boolean
    daily_personalized_tailorings_used?: boolean
    daily_cover_letters_used?: boolean
    daily_reset_date?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "anon_user_id" | "updated_at" | "daily_basic_tailorings_used" | "daily_personalized_tailorings_used" | "daily_cover_letters_used" | "daily_reset_date", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    resume_events?: boolean | User$resume_eventsArgs<ExtArgs>
    resumes?: boolean | User$resumesArgs<ExtArgs>
    saved_resumes?: boolean | User$saved_resumesArgs<ExtArgs>
    tailoring_analytics?: boolean | User$tailoring_analyticsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      resume_events: Prisma.$ResumeEventPayload<ExtArgs>[]
      resumes: Prisma.$ResumePayload<ExtArgs>[]
      saved_resumes: Prisma.$SavedResumePayload<ExtArgs>[]
      tailoring_analytics: Prisma.$TailoringAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      anon_user_id: string
      updated_at: Date
      daily_basic_tailorings_used: number | null
      daily_personalized_tailorings_used: number | null
      daily_cover_letters_used: number | null
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
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resume_events<T extends User$resume_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$resume_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_resumes<T extends User$saved_resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$saved_resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tailoring_analytics<T extends User$tailoring_analyticsArgs<ExtArgs> = {}>(args?: Subset<T, User$tailoring_analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TailoringAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly anon_user_id: FieldRef<"User", 'String'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly daily_basic_tailorings_used: FieldRef<"User", 'Int'>
    readonly daily_personalized_tailorings_used: FieldRef<"User", 'Int'>
    readonly daily_cover_letters_used: FieldRef<"User", 'Int'>
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
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * User.resume_events
   */
  export type User$resume_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    where?: ResumeEventWhereInput
    orderBy?: ResumeEventOrderByWithRelationInput | ResumeEventOrderByWithRelationInput[]
    cursor?: ResumeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeEventScalarFieldEnum | ResumeEventScalarFieldEnum[]
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
   * User.saved_resumes
   */
  export type User$saved_resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.tailoring_analytics
   */
  export type User$tailoring_analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ResumeEvent
   */

  export type AggregateResumeEvent = {
    _count: ResumeEventCountAggregateOutputType | null
    _avg: ResumeEventAvgAggregateOutputType | null
    _sum: ResumeEventSumAggregateOutputType | null
    _min: ResumeEventMinAggregateOutputType | null
    _max: ResumeEventMaxAggregateOutputType | null
  }

  export type ResumeEventAvgAggregateOutputType = {
    ats_score: number | null
    jd_score: number | null
    version: number | null
  }

  export type ResumeEventSumAggregateOutputType = {
    ats_score: number | null
    jd_score: number | null
    version: number | null
  }

  export type ResumeEventMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_type: string | null
    resume_id: string | null
    resume_text: string | null
    job_description: string | null
    tailored_text: string | null
    ats_score: number | null
    jd_score: number | null
    tailoring_mode: string | null
    version: number | null
    timestamp: Date | null
  }

  export type ResumeEventMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    event_type: string | null
    resume_id: string | null
    resume_text: string | null
    job_description: string | null
    tailored_text: string | null
    ats_score: number | null
    jd_score: number | null
    tailoring_mode: string | null
    version: number | null
    timestamp: Date | null
  }

  export type ResumeEventCountAggregateOutputType = {
    id: number
    user_id: number
    event_type: number
    resume_id: number
    resume_text: number
    job_description: number
    tailored_text: number
    ats_score: number
    jd_score: number
    tailoring_mode: number
    version: number
    timestamp: number
    _all: number
  }


  export type ResumeEventAvgAggregateInputType = {
    ats_score?: true
    jd_score?: true
    version?: true
  }

  export type ResumeEventSumAggregateInputType = {
    ats_score?: true
    jd_score?: true
    version?: true
  }

  export type ResumeEventMinAggregateInputType = {
    id?: true
    user_id?: true
    event_type?: true
    resume_id?: true
    resume_text?: true
    job_description?: true
    tailored_text?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    version?: true
    timestamp?: true
  }

  export type ResumeEventMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_type?: true
    resume_id?: true
    resume_text?: true
    job_description?: true
    tailored_text?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    version?: true
    timestamp?: true
  }

  export type ResumeEventCountAggregateInputType = {
    id?: true
    user_id?: true
    event_type?: true
    resume_id?: true
    resume_text?: true
    job_description?: true
    tailored_text?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    version?: true
    timestamp?: true
    _all?: true
  }

  export type ResumeEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeEvent to aggregate.
     */
    where?: ResumeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvents to fetch.
     */
    orderBy?: ResumeEventOrderByWithRelationInput | ResumeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeEvents
    **/
    _count?: true | ResumeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeEventMaxAggregateInputType
  }

  export type GetResumeEventAggregateType<T extends ResumeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeEvent[P]>
      : GetScalarType<T[P], AggregateResumeEvent[P]>
  }




  export type ResumeEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeEventWhereInput
    orderBy?: ResumeEventOrderByWithAggregationInput | ResumeEventOrderByWithAggregationInput[]
    by: ResumeEventScalarFieldEnum[] | ResumeEventScalarFieldEnum
    having?: ResumeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeEventCountAggregateInputType | true
    _avg?: ResumeEventAvgAggregateInputType
    _sum?: ResumeEventSumAggregateInputType
    _min?: ResumeEventMinAggregateInputType
    _max?: ResumeEventMaxAggregateInputType
  }

  export type ResumeEventGroupByOutputType = {
    id: string
    user_id: string
    event_type: string | null
    resume_id: string | null
    resume_text: string | null
    job_description: string | null
    tailored_text: string | null
    ats_score: number | null
    jd_score: number | null
    tailoring_mode: string | null
    version: number | null
    timestamp: Date
    _count: ResumeEventCountAggregateOutputType | null
    _avg: ResumeEventAvgAggregateOutputType | null
    _sum: ResumeEventSumAggregateOutputType | null
    _min: ResumeEventMinAggregateOutputType | null
    _max: ResumeEventMaxAggregateOutputType | null
  }

  type GetResumeEventGroupByPayload<T extends ResumeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeEventGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeEventGroupByOutputType[P]>
        }
      >
    >


  export type ResumeEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_type?: boolean
    resume_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    tailored_text?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    version?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvent"]>

  export type ResumeEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_type?: boolean
    resume_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    tailored_text?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    version?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvent"]>

  export type ResumeEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_type?: boolean
    resume_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    tailored_text?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    version?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvent"]>

  export type ResumeEventSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_type?: boolean
    resume_id?: boolean
    resume_text?: boolean
    job_description?: boolean
    tailored_text?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    version?: boolean
    timestamp?: boolean
  }

  export type ResumeEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_type" | "resume_id" | "resume_text" | "job_description" | "tailored_text" | "ats_score" | "jd_score" | "tailoring_mode" | "version" | "timestamp", ExtArgs["result"]["resumeEvent"]>
  export type ResumeEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResumeEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResumeEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      event_type: string | null
      resume_id: string | null
      resume_text: string | null
      job_description: string | null
      tailored_text: string | null
      ats_score: number | null
      jd_score: number | null
      tailoring_mode: string | null
      version: number | null
      timestamp: Date
    }, ExtArgs["result"]["resumeEvent"]>
    composites: {}
  }

  type ResumeEventGetPayload<S extends boolean | null | undefined | ResumeEventDefaultArgs> = $Result.GetResult<Prisma.$ResumeEventPayload, S>

  type ResumeEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeEventCountAggregateInputType | true
    }

  export interface ResumeEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeEvent'], meta: { name: 'ResumeEvent' } }
    /**
     * Find zero or one ResumeEvent that matches the filter.
     * @param {ResumeEventFindUniqueArgs} args - Arguments to find a ResumeEvent
     * @example
     * // Get one ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeEventFindUniqueArgs>(args: SelectSubset<T, ResumeEventFindUniqueArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResumeEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeEventFindUniqueOrThrowArgs} args - Arguments to find a ResumeEvent
     * @example
     * // Get one ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventFindFirstArgs} args - Arguments to find a ResumeEvent
     * @example
     * // Get one ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeEventFindFirstArgs>(args?: SelectSubset<T, ResumeEventFindFirstArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventFindFirstOrThrowArgs} args - Arguments to find a ResumeEvent
     * @example
     * // Get one ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResumeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeEvents
     * const resumeEvents = await prisma.resumeEvent.findMany()
     * 
     * // Get first 10 ResumeEvents
     * const resumeEvents = await prisma.resumeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeEventWithIdOnly = await prisma.resumeEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeEventFindManyArgs>(args?: SelectSubset<T, ResumeEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResumeEvent.
     * @param {ResumeEventCreateArgs} args - Arguments to create a ResumeEvent.
     * @example
     * // Create one ResumeEvent
     * const ResumeEvent = await prisma.resumeEvent.create({
     *   data: {
     *     // ... data to create a ResumeEvent
     *   }
     * })
     * 
     */
    create<T extends ResumeEventCreateArgs>(args: SelectSubset<T, ResumeEventCreateArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResumeEvents.
     * @param {ResumeEventCreateManyArgs} args - Arguments to create many ResumeEvents.
     * @example
     * // Create many ResumeEvents
     * const resumeEvent = await prisma.resumeEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeEventCreateManyArgs>(args?: SelectSubset<T, ResumeEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeEvents and returns the data saved in the database.
     * @param {ResumeEventCreateManyAndReturnArgs} args - Arguments to create many ResumeEvents.
     * @example
     * // Create many ResumeEvents
     * const resumeEvent = await prisma.resumeEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeEvents and only return the `id`
     * const resumeEventWithIdOnly = await prisma.resumeEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResumeEvent.
     * @param {ResumeEventDeleteArgs} args - Arguments to delete one ResumeEvent.
     * @example
     * // Delete one ResumeEvent
     * const ResumeEvent = await prisma.resumeEvent.delete({
     *   where: {
     *     // ... filter to delete one ResumeEvent
     *   }
     * })
     * 
     */
    delete<T extends ResumeEventDeleteArgs>(args: SelectSubset<T, ResumeEventDeleteArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResumeEvent.
     * @param {ResumeEventUpdateArgs} args - Arguments to update one ResumeEvent.
     * @example
     * // Update one ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeEventUpdateArgs>(args: SelectSubset<T, ResumeEventUpdateArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResumeEvents.
     * @param {ResumeEventDeleteManyArgs} args - Arguments to filter ResumeEvents to delete.
     * @example
     * // Delete a few ResumeEvents
     * const { count } = await prisma.resumeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeEventDeleteManyArgs>(args?: SelectSubset<T, ResumeEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeEvents
     * const resumeEvent = await prisma.resumeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeEventUpdateManyArgs>(args: SelectSubset<T, ResumeEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeEvents and returns the data updated in the database.
     * @param {ResumeEventUpdateManyAndReturnArgs} args - Arguments to update many ResumeEvents.
     * @example
     * // Update many ResumeEvents
     * const resumeEvent = await prisma.resumeEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResumeEvents and only return the `id`
     * const resumeEventWithIdOnly = await prisma.resumeEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResumeEvent.
     * @param {ResumeEventUpsertArgs} args - Arguments to update or create a ResumeEvent.
     * @example
     * // Update or create a ResumeEvent
     * const resumeEvent = await prisma.resumeEvent.upsert({
     *   create: {
     *     // ... data to create a ResumeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeEvent we want to update
     *   }
     * })
     */
    upsert<T extends ResumeEventUpsertArgs>(args: SelectSubset<T, ResumeEventUpsertArgs<ExtArgs>>): Prisma__ResumeEventClient<$Result.GetResult<Prisma.$ResumeEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResumeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventCountArgs} args - Arguments to filter ResumeEvents to count.
     * @example
     * // Count the number of ResumeEvents
     * const count = await prisma.resumeEvent.count({
     *   where: {
     *     // ... the filter for the ResumeEvents we want to count
     *   }
     * })
    **/
    count<T extends ResumeEventCountArgs>(
      args?: Subset<T, ResumeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeEventAggregateArgs>(args: Subset<T, ResumeEventAggregateArgs>): Prisma.PrismaPromise<GetResumeEventAggregateType<T>>

    /**
     * Group by ResumeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEventGroupByArgs} args - Group by arguments.
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
      T extends ResumeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeEventGroupByArgs['orderBy'] }
        : { orderBy?: ResumeEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeEvent model
   */
  readonly fields: ResumeEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ResumeEvent model
   */
  interface ResumeEventFieldRefs {
    readonly id: FieldRef<"ResumeEvent", 'String'>
    readonly user_id: FieldRef<"ResumeEvent", 'String'>
    readonly event_type: FieldRef<"ResumeEvent", 'String'>
    readonly resume_id: FieldRef<"ResumeEvent", 'String'>
    readonly resume_text: FieldRef<"ResumeEvent", 'String'>
    readonly job_description: FieldRef<"ResumeEvent", 'String'>
    readonly tailored_text: FieldRef<"ResumeEvent", 'String'>
    readonly ats_score: FieldRef<"ResumeEvent", 'Int'>
    readonly jd_score: FieldRef<"ResumeEvent", 'Int'>
    readonly tailoring_mode: FieldRef<"ResumeEvent", 'String'>
    readonly version: FieldRef<"ResumeEvent", 'Int'>
    readonly timestamp: FieldRef<"ResumeEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeEvent findUnique
   */
  export type ResumeEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvent to fetch.
     */
    where: ResumeEventWhereUniqueInput
  }

  /**
   * ResumeEvent findUniqueOrThrow
   */
  export type ResumeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvent to fetch.
     */
    where: ResumeEventWhereUniqueInput
  }

  /**
   * ResumeEvent findFirst
   */
  export type ResumeEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvent to fetch.
     */
    where?: ResumeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvents to fetch.
     */
    orderBy?: ResumeEventOrderByWithRelationInput | ResumeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeEvents.
     */
    cursor?: ResumeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeEvents.
     */
    distinct?: ResumeEventScalarFieldEnum | ResumeEventScalarFieldEnum[]
  }

  /**
   * ResumeEvent findFirstOrThrow
   */
  export type ResumeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvent to fetch.
     */
    where?: ResumeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvents to fetch.
     */
    orderBy?: ResumeEventOrderByWithRelationInput | ResumeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeEvents.
     */
    cursor?: ResumeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeEvents.
     */
    distinct?: ResumeEventScalarFieldEnum | ResumeEventScalarFieldEnum[]
  }

  /**
   * ResumeEvent findMany
   */
  export type ResumeEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvents to fetch.
     */
    where?: ResumeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvents to fetch.
     */
    orderBy?: ResumeEventOrderByWithRelationInput | ResumeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeEvents.
     */
    cursor?: ResumeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvents.
     */
    skip?: number
    distinct?: ResumeEventScalarFieldEnum | ResumeEventScalarFieldEnum[]
  }

  /**
   * ResumeEvent create
   */
  export type ResumeEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeEvent.
     */
    data: XOR<ResumeEventCreateInput, ResumeEventUncheckedCreateInput>
  }

  /**
   * ResumeEvent createMany
   */
  export type ResumeEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeEvents.
     */
    data: ResumeEventCreateManyInput | ResumeEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeEvent createManyAndReturn
   */
  export type ResumeEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * The data used to create many ResumeEvents.
     */
    data: ResumeEventCreateManyInput | ResumeEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeEvent update
   */
  export type ResumeEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeEvent.
     */
    data: XOR<ResumeEventUpdateInput, ResumeEventUncheckedUpdateInput>
    /**
     * Choose, which ResumeEvent to update.
     */
    where: ResumeEventWhereUniqueInput
  }

  /**
   * ResumeEvent updateMany
   */
  export type ResumeEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeEvents.
     */
    data: XOR<ResumeEventUpdateManyMutationInput, ResumeEventUncheckedUpdateManyInput>
    /**
     * Filter which ResumeEvents to update
     */
    where?: ResumeEventWhereInput
    /**
     * Limit how many ResumeEvents to update.
     */
    limit?: number
  }

  /**
   * ResumeEvent updateManyAndReturn
   */
  export type ResumeEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * The data used to update ResumeEvents.
     */
    data: XOR<ResumeEventUpdateManyMutationInput, ResumeEventUncheckedUpdateManyInput>
    /**
     * Filter which ResumeEvents to update
     */
    where?: ResumeEventWhereInput
    /**
     * Limit how many ResumeEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeEvent upsert
   */
  export type ResumeEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeEvent to update in case it exists.
     */
    where: ResumeEventWhereUniqueInput
    /**
     * In case the ResumeEvent found by the `where` argument doesn't exist, create a new ResumeEvent with this data.
     */
    create: XOR<ResumeEventCreateInput, ResumeEventUncheckedCreateInput>
    /**
     * In case the ResumeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeEventUpdateInput, ResumeEventUncheckedUpdateInput>
  }

  /**
   * ResumeEvent delete
   */
  export type ResumeEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
    /**
     * Filter which ResumeEvent to delete.
     */
    where: ResumeEventWhereUniqueInput
  }

  /**
   * ResumeEvent deleteMany
   */
  export type ResumeEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeEvents to delete
     */
    where?: ResumeEventWhereInput
    /**
     * Limit how many ResumeEvents to delete.
     */
    limit?: number
  }

  /**
   * ResumeEvent without action
   */
  export type ResumeEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvent
     */
    select?: ResumeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvent
     */
    omit?: ResumeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEventInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    element: string | null
    timestamp: Date | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    element: string | null
    timestamp: Date | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    element: number
    timestamp: number
    metadata: number
    _all: number
  }


  export type InteractionMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    element?: true
    timestamp?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    element?: true
    timestamp?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    element?: true
    timestamp?: true
    metadata?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: string
    user_id: string
    action: string | null
    element: string | null
    timestamp: Date
    metadata: JsonValue | null
    _count: InteractionCountAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    element?: boolean
    timestamp?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    element?: boolean
    timestamp?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    element?: boolean
    timestamp?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    element?: boolean
    timestamp?: boolean
    metadata?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "element" | "timestamp" | "metadata", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      action: string | null
      element: string | null
      timestamp: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
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
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'String'>
    readonly user_id: FieldRef<"Interaction", 'String'>
    readonly action: FieldRef<"Interaction", 'String'>
    readonly element: FieldRef<"Interaction", 'String'>
    readonly timestamp: FieldRef<"Interaction", 'DateTime'>
    readonly metadata: FieldRef<"Interaction", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
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
    ats_score: number | null
    jd_score: number | null
    iterations: number | null
  }

  export type TailoringAnalyticsSumAggregateOutputType = {
    ats_score: number | null
    jd_score: number | null
    iterations: number | null
  }

  export type TailoringAnalyticsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    original_text: string | null
    tailored_text: string | null
    job_description: string | null
    ats_score: number | null
    jd_score: number | null
    tailoring_mode: string | null
    is_refinement: boolean | null
    iterations: number | null
    golden_passed: boolean | null
    created_at: Date | null
  }

  export type TailoringAnalyticsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    original_text: string | null
    tailored_text: string | null
    job_description: string | null
    ats_score: number | null
    jd_score: number | null
    tailoring_mode: string | null
    is_refinement: boolean | null
    iterations: number | null
    golden_passed: boolean | null
    created_at: Date | null
  }

  export type TailoringAnalyticsCountAggregateOutputType = {
    id: number
    user_id: number
    resume_id: number
    original_text: number
    tailored_text: number
    job_description: number
    ats_score: number
    jd_score: number
    tailoring_mode: number
    is_refinement: number
    iterations: number
    golden_passed: number
    created_at: number
    _all: number
  }


  export type TailoringAnalyticsAvgAggregateInputType = {
    ats_score?: true
    jd_score?: true
    iterations?: true
  }

  export type TailoringAnalyticsSumAggregateInputType = {
    ats_score?: true
    jd_score?: true
    iterations?: true
  }

  export type TailoringAnalyticsMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    tailored_text?: true
    job_description?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    is_refinement?: true
    iterations?: true
    golden_passed?: true
    created_at?: true
  }

  export type TailoringAnalyticsMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    tailored_text?: true
    job_description?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    is_refinement?: true
    iterations?: true
    golden_passed?: true
    created_at?: true
  }

  export type TailoringAnalyticsCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    original_text?: true
    tailored_text?: true
    job_description?: true
    ats_score?: true
    jd_score?: true
    tailoring_mode?: true
    is_refinement?: true
    iterations?: true
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
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
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
    original_text?: boolean
    tailored_text?: boolean
    job_description?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    is_refinement?: boolean
    iterations?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    tailored_text?: boolean
    job_description?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    is_refinement?: boolean
    iterations?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    tailored_text?: boolean
    job_description?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    is_refinement?: boolean
    iterations?: boolean
    golden_passed?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tailoringAnalytics"]>

  export type TailoringAnalyticsSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    original_text?: boolean
    tailored_text?: boolean
    job_description?: boolean
    ats_score?: boolean
    jd_score?: boolean
    tailoring_mode?: boolean
    is_refinement?: boolean
    iterations?: boolean
    golden_passed?: boolean
    created_at?: boolean
  }

  export type TailoringAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_id" | "original_text" | "tailored_text" | "job_description" | "ats_score" | "jd_score" | "tailoring_mode" | "is_refinement" | "iterations" | "golden_passed" | "created_at", ExtArgs["result"]["tailoringAnalytics"]>
  export type TailoringAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TailoringAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TailoringAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TailoringAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TailoringAnalytics"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_id: string
      original_text: string
      tailored_text: string
      job_description: string
      ats_score: number
      jd_score: number
      tailoring_mode: string
      is_refinement: boolean
      iterations: number
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
    readonly original_text: FieldRef<"TailoringAnalytics", 'String'>
    readonly tailored_text: FieldRef<"TailoringAnalytics", 'String'>
    readonly job_description: FieldRef<"TailoringAnalytics", 'String'>
    readonly ats_score: FieldRef<"TailoringAnalytics", 'Int'>
    readonly jd_score: FieldRef<"TailoringAnalytics", 'Int'>
    readonly tailoring_mode: FieldRef<"TailoringAnalytics", 'String'>
    readonly is_refinement: FieldRef<"TailoringAnalytics", 'Boolean'>
    readonly iterations: FieldRef<"TailoringAnalytics", 'Int'>
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
    version: number | null
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_text: string
      job_description: string
      modified_resume: string | null
      ats_score: number | null
      jd_score: number | null
      version: number | null
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
    title: string | null
    created_at: Date | null
  }

  export type SavedResumeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    resume_id: string | null
    title: string | null
    created_at: Date | null
  }

  export type SavedResumeCountAggregateOutputType = {
    id: number
    user_id: number
    resume_id: number
    title: number
    created_at: number
    _all: number
  }


  export type SavedResumeMinAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    title?: true
    created_at?: true
  }

  export type SavedResumeMaxAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    title?: true
    created_at?: true
  }

  export type SavedResumeCountAggregateInputType = {
    id?: true
    user_id?: true
    resume_id?: true
    title?: true
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
    title: string | null
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
    title?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    title?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    title?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedResume"]>

  export type SavedResumeSelectScalar = {
    id?: boolean
    user_id?: boolean
    resume_id?: boolean
    title?: boolean
    created_at?: boolean
  }

  export type SavedResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "resume_id" | "title" | "created_at", ExtArgs["result"]["savedResume"]>
  export type SavedResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedResume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      resume_id: string
      title: string | null
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
    readonly title: FieldRef<"SavedResume", 'String'>
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
    anon_user_id: 'anon_user_id',
    updated_at: 'updated_at',
    daily_basic_tailorings_used: 'daily_basic_tailorings_used',
    daily_personalized_tailorings_used: 'daily_personalized_tailorings_used',
    daily_cover_letters_used: 'daily_cover_letters_used',
    daily_reset_date: 'daily_reset_date'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeEventScalarFieldEnum: {
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

  export type ResumeEventScalarFieldEnum = (typeof ResumeEventScalarFieldEnum)[keyof typeof ResumeEventScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    element: 'element',
    timestamp: 'timestamp',
    metadata: 'metadata'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const TailoringAnalyticsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    resume_id: 'resume_id',
    original_text: 'original_text',
    tailored_text: 'tailored_text',
    job_description: 'job_description',
    ats_score: 'ats_score',
    jd_score: 'jd_score',
    tailoring_mode: 'tailoring_mode',
    is_refinement: 'is_refinement',
    iterations: 'iterations',
    golden_passed: 'golden_passed',
    created_at: 'created_at'
  };

  export type TailoringAnalyticsScalarFieldEnum = (typeof TailoringAnalyticsScalarFieldEnum)[keyof typeof TailoringAnalyticsScalarFieldEnum]


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


  export const SavedResumeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    resume_id: 'resume_id',
    title: 'title',
    created_at: 'created_at'
  };

  export type SavedResumeScalarFieldEnum = (typeof SavedResumeScalarFieldEnum)[keyof typeof SavedResumeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    email?: StringNullableFilter<"User"> | string | null
    anon_user_id?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    daily_basic_tailorings_used?: IntNullableFilter<"User"> | number | null
    daily_personalized_tailorings_used?: IntNullableFilter<"User"> | number | null
    daily_cover_letters_used?: IntNullableFilter<"User"> | number | null
    daily_reset_date?: DateTimeNullableFilter<"User"> | Date | string | null
    interactions?: InteractionListRelationFilter
    resume_events?: ResumeEventListRelationFilter
    resumes?: ResumeListRelationFilter
    saved_resumes?: SavedResumeListRelationFilter
    tailoring_analytics?: TailoringAnalyticsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    anon_user_id?: SortOrder
    updated_at?: SortOrder
    daily_basic_tailorings_used?: SortOrderInput | SortOrder
    daily_personalized_tailorings_used?: SortOrderInput | SortOrder
    daily_cover_letters_used?: SortOrderInput | SortOrder
    daily_reset_date?: SortOrderInput | SortOrder
    interactions?: InteractionOrderByRelationAggregateInput
    resume_events?: ResumeEventOrderByRelationAggregateInput
    resumes?: ResumeOrderByRelationAggregateInput
    saved_resumes?: SavedResumeOrderByRelationAggregateInput
    tailoring_analytics?: TailoringAnalyticsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    anon_user_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    updated_at?: DateTimeFilter<"User"> | Date | string
    daily_basic_tailorings_used?: IntNullableFilter<"User"> | number | null
    daily_personalized_tailorings_used?: IntNullableFilter<"User"> | number | null
    daily_cover_letters_used?: IntNullableFilter<"User"> | number | null
    daily_reset_date?: DateTimeNullableFilter<"User"> | Date | string | null
    interactions?: InteractionListRelationFilter
    resume_events?: ResumeEventListRelationFilter
    resumes?: ResumeListRelationFilter
    saved_resumes?: SavedResumeListRelationFilter
    tailoring_analytics?: TailoringAnalyticsListRelationFilter
  }, "id" | "anon_user_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    anon_user_id?: SortOrder
    updated_at?: SortOrder
    daily_basic_tailorings_used?: SortOrderInput | SortOrder
    daily_personalized_tailorings_used?: SortOrderInput | SortOrder
    daily_cover_letters_used?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    anon_user_id?: StringWithAggregatesFilter<"User"> | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    daily_basic_tailorings_used?: IntNullableWithAggregatesFilter<"User"> | number | null
    daily_personalized_tailorings_used?: IntNullableWithAggregatesFilter<"User"> | number | null
    daily_cover_letters_used?: IntNullableWithAggregatesFilter<"User"> | number | null
    daily_reset_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ResumeEventWhereInput = {
    AND?: ResumeEventWhereInput | ResumeEventWhereInput[]
    OR?: ResumeEventWhereInput[]
    NOT?: ResumeEventWhereInput | ResumeEventWhereInput[]
    id?: StringFilter<"ResumeEvent"> | string
    user_id?: StringFilter<"ResumeEvent"> | string
    event_type?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_id?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_text?: StringNullableFilter<"ResumeEvent"> | string | null
    job_description?: StringNullableFilter<"ResumeEvent"> | string | null
    tailored_text?: StringNullableFilter<"ResumeEvent"> | string | null
    ats_score?: IntNullableFilter<"ResumeEvent"> | number | null
    jd_score?: IntNullableFilter<"ResumeEvent"> | number | null
    tailoring_mode?: StringNullableFilter<"ResumeEvent"> | string | null
    version?: IntNullableFilter<"ResumeEvent"> | number | null
    timestamp?: DateTimeFilter<"ResumeEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeEventOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_type?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume_text?: SortOrderInput | SortOrder
    job_description?: SortOrderInput | SortOrder
    tailored_text?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResumeEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeEventWhereInput | ResumeEventWhereInput[]
    OR?: ResumeEventWhereInput[]
    NOT?: ResumeEventWhereInput | ResumeEventWhereInput[]
    user_id?: StringFilter<"ResumeEvent"> | string
    event_type?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_id?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_text?: StringNullableFilter<"ResumeEvent"> | string | null
    job_description?: StringNullableFilter<"ResumeEvent"> | string | null
    tailored_text?: StringNullableFilter<"ResumeEvent"> | string | null
    ats_score?: IntNullableFilter<"ResumeEvent"> | number | null
    jd_score?: IntNullableFilter<"ResumeEvent"> | number | null
    tailoring_mode?: StringNullableFilter<"ResumeEvent"> | string | null
    version?: IntNullableFilter<"ResumeEvent"> | number | null
    timestamp?: DateTimeFilter<"ResumeEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResumeEventOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_type?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume_text?: SortOrderInput | SortOrder
    job_description?: SortOrderInput | SortOrder
    tailored_text?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ResumeEventCountOrderByAggregateInput
    _avg?: ResumeEventAvgOrderByAggregateInput
    _max?: ResumeEventMaxOrderByAggregateInput
    _min?: ResumeEventMinOrderByAggregateInput
    _sum?: ResumeEventSumOrderByAggregateInput
  }

  export type ResumeEventScalarWhereWithAggregatesInput = {
    AND?: ResumeEventScalarWhereWithAggregatesInput | ResumeEventScalarWhereWithAggregatesInput[]
    OR?: ResumeEventScalarWhereWithAggregatesInput[]
    NOT?: ResumeEventScalarWhereWithAggregatesInput | ResumeEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumeEvent"> | string
    user_id?: StringWithAggregatesFilter<"ResumeEvent"> | string
    event_type?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    resume_id?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    resume_text?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    job_description?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    tailored_text?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    ats_score?: IntNullableWithAggregatesFilter<"ResumeEvent"> | number | null
    jd_score?: IntNullableWithAggregatesFilter<"ResumeEvent"> | number | null
    tailoring_mode?: StringNullableWithAggregatesFilter<"ResumeEvent"> | string | null
    version?: IntNullableWithAggregatesFilter<"ResumeEvent"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"ResumeEvent"> | Date | string
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: StringFilter<"Interaction"> | string
    user_id?: StringFilter<"Interaction"> | string
    action?: StringNullableFilter<"Interaction"> | string | null
    element?: StringNullableFilter<"Interaction"> | string | null
    timestamp?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    user_id?: StringFilter<"Interaction"> | string
    action?: StringNullableFilter<"Interaction"> | string | null
    element?: StringNullableFilter<"Interaction"> | string | null
    timestamp?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrderInput | SortOrder
    element?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interaction"> | string
    user_id?: StringWithAggregatesFilter<"Interaction"> | string
    action?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    element?: StringNullableWithAggregatesFilter<"Interaction"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Interaction"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"Interaction">
  }

  export type TailoringAnalyticsWhereInput = {
    AND?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    OR?: TailoringAnalyticsWhereInput[]
    NOT?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    id?: StringFilter<"TailoringAnalytics"> | string
    user_id?: StringFilter<"TailoringAnalytics"> | string
    resume_id?: StringFilter<"TailoringAnalytics"> | string
    original_text?: StringFilter<"TailoringAnalytics"> | string
    tailored_text?: StringFilter<"TailoringAnalytics"> | string
    job_description?: StringFilter<"TailoringAnalytics"> | string
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    is_refinement?: BoolFilter<"TailoringAnalytics"> | boolean
    iterations?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TailoringAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    tailored_text?: SortOrder
    job_description?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    is_refinement?: SortOrder
    iterations?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TailoringAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    OR?: TailoringAnalyticsWhereInput[]
    NOT?: TailoringAnalyticsWhereInput | TailoringAnalyticsWhereInput[]
    user_id?: StringFilter<"TailoringAnalytics"> | string
    resume_id?: StringFilter<"TailoringAnalytics"> | string
    original_text?: StringFilter<"TailoringAnalytics"> | string
    tailored_text?: StringFilter<"TailoringAnalytics"> | string
    job_description?: StringFilter<"TailoringAnalytics"> | string
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    is_refinement?: BoolFilter<"TailoringAnalytics"> | boolean
    iterations?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TailoringAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    tailored_text?: SortOrder
    job_description?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    is_refinement?: SortOrder
    iterations?: SortOrder
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
    original_text?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    tailored_text?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    job_description?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    ats_score?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    jd_score?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    tailoring_mode?: StringWithAggregatesFilter<"TailoringAnalytics"> | string
    is_refinement?: BoolWithAggregatesFilter<"TailoringAnalytics"> | boolean
    iterations?: IntWithAggregatesFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolWithAggregatesFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TailoringAnalytics"> | Date | string
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
    version?: IntNullableFilter<"Resume"> | number | null
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    tailoring_mode?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
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
    version?: IntNullableFilter<"Resume"> | number | null
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    modified_resume?: SortOrderInput | SortOrder
    ats_score?: SortOrderInput | SortOrder
    jd_score?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
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
    version?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    tailoring_mode?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type SavedResumeWhereInput = {
    AND?: SavedResumeWhereInput | SavedResumeWhereInput[]
    OR?: SavedResumeWhereInput[]
    NOT?: SavedResumeWhereInput | SavedResumeWhereInput[]
    id?: StringFilter<"SavedResume"> | string
    user_id?: StringFilter<"SavedResume"> | string
    resume_id?: StringFilter<"SavedResume"> | string
    title?: StringNullableFilter<"SavedResume"> | string | null
    created_at?: DateTimeFilter<"SavedResume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedResumeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    title?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedResumeWhereInput | SavedResumeWhereInput[]
    OR?: SavedResumeWhereInput[]
    NOT?: SavedResumeWhereInput | SavedResumeWhereInput[]
    user_id?: StringFilter<"SavedResume"> | string
    resume_id?: StringFilter<"SavedResume"> | string
    title?: StringNullableFilter<"SavedResume"> | string | null
    created_at?: DateTimeFilter<"SavedResume"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SavedResumeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    title?: SortOrderInput | SortOrder
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
    title?: StringNullableWithAggregatesFilter<"SavedResume"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SavedResume"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResumeEventCreateInput = {
    id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutResume_eventsInput
  }

  export type ResumeEventUncheckedCreateInput = {
    id: string
    user_id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
  }

  export type ResumeEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResume_eventsNestedInput
  }

  export type ResumeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEventCreateManyInput = {
    id: string
    user_id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
  }

  export type ResumeEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionCreateInput = {
    id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutInteractionsInput
  }

  export type InteractionUncheckedCreateInput = {
    id: string
    user_id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionCreateManyInput = {
    id: string
    user_id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TailoringAnalyticsCreateInput = {
    id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
    golden_passed: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTailoring_analyticsInput
  }

  export type TailoringAnalyticsUncheckedCreateInput = {
    id: string
    user_id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTailoring_analyticsNestedInput
  }

  export type TailoringAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsCreateManyInput = {
    id: string
    user_id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
    tailoring_mode?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutResumesInput
  }

  export type ResumeUncheckedCreateInput = {
    id: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyInput = {
    id: string
    user_id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
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
    version?: NullableIntFieldUpdateOperationsInput | number | null
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
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeCreateInput = {
    id?: string
    resume_id: string
    title?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSaved_resumesInput
  }

  export type SavedResumeUncheckedCreateInput = {
    id?: string
    user_id: string
    resume_id: string
    title?: string | null
    created_at?: Date | string
  }

  export type SavedResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSaved_resumesNestedInput
  }

  export type SavedResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeCreateManyInput = {
    id?: string
    user_id: string
    resume_id: string
    title?: string | null
    created_at?: Date | string
  }

  export type SavedResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type ResumeEventListRelationFilter = {
    every?: ResumeEventWhereInput
    some?: ResumeEventWhereInput
    none?: ResumeEventWhereInput
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TailoringAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    anon_user_id?: SortOrder
    updated_at?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    anon_user_id?: SortOrder
    updated_at?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    anon_user_id?: SortOrder
    updated_at?: SortOrder
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
    daily_reset_date?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    daily_basic_tailorings_used?: SortOrder
    daily_personalized_tailorings_used?: SortOrder
    daily_cover_letters_used?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResumeEventCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_type?: SortOrder
    resume_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    tailored_text?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    timestamp?: SortOrder
  }

  export type ResumeEventAvgOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
  }

  export type ResumeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_type?: SortOrder
    resume_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    tailored_text?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    timestamp?: SortOrder
  }

  export type ResumeEventMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_type?: SortOrder
    resume_id?: SortOrder
    resume_text?: SortOrder
    job_description?: SortOrder
    tailored_text?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    version?: SortOrder
    timestamp?: SortOrder
  }

  export type ResumeEventSumOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    version?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    element?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    element?: SortOrder
    timestamp?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    element?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TailoringAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    tailored_text?: SortOrder
    job_description?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    is_refinement?: SortOrder
    iterations?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsAvgOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    iterations?: SortOrder
  }

  export type TailoringAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    tailored_text?: SortOrder
    job_description?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    is_refinement?: SortOrder
    iterations?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    original_text?: SortOrder
    tailored_text?: SortOrder
    job_description?: SortOrder
    ats_score?: SortOrder
    jd_score?: SortOrder
    tailoring_mode?: SortOrder
    is_refinement?: SortOrder
    iterations?: SortOrder
    golden_passed?: SortOrder
    created_at?: SortOrder
  }

  export type TailoringAnalyticsSumOrderByAggregateInput = {
    ats_score?: SortOrder
    jd_score?: SortOrder
    iterations?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SavedResumeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type SavedResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type SavedResumeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    resume_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type InteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type ResumeEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput> | ResumeEventCreateWithoutUserInput[] | ResumeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeEventCreateOrConnectWithoutUserInput | ResumeEventCreateOrConnectWithoutUserInput[]
    createMany?: ResumeEventCreateManyUserInputEnvelope
    connect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
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

  export type InteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type ResumeEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput> | ResumeEventCreateWithoutUserInput[] | ResumeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeEventCreateOrConnectWithoutUserInput | ResumeEventCreateOrConnectWithoutUserInput[]
    createMany?: ResumeEventCreateManyUserInputEnvelope
    connect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type ResumeEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput> | ResumeEventCreateWithoutUserInput[] | ResumeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeEventCreateOrConnectWithoutUserInput | ResumeEventCreateOrConnectWithoutUserInput[]
    upsert?: ResumeEventUpsertWithWhereUniqueWithoutUserInput | ResumeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeEventCreateManyUserInputEnvelope
    set?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    disconnect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    delete?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    connect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    update?: ResumeEventUpdateWithWhereUniqueWithoutUserInput | ResumeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeEventUpdateManyWithWhereWithoutUserInput | ResumeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeEventScalarWhereInput | ResumeEventScalarWhereInput[]
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

  export type InteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput> | InteractionCreateWithoutUserInput[] | InteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutUserInput | InteractionCreateOrConnectWithoutUserInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutUserInput | InteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InteractionCreateManyUserInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutUserInput | InteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutUserInput | InteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type ResumeEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput> | ResumeEventCreateWithoutUserInput[] | ResumeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeEventCreateOrConnectWithoutUserInput | ResumeEventCreateOrConnectWithoutUserInput[]
    upsert?: ResumeEventUpsertWithWhereUniqueWithoutUserInput | ResumeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeEventCreateManyUserInputEnvelope
    set?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    disconnect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    delete?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    connect?: ResumeEventWhereUniqueInput | ResumeEventWhereUniqueInput[]
    update?: ResumeEventUpdateWithWhereUniqueWithoutUserInput | ResumeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeEventUpdateManyWithWhereWithoutUserInput | ResumeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeEventScalarWhereInput | ResumeEventScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutResume_eventsInput = {
    create?: XOR<UserCreateWithoutResume_eventsInput, UserUncheckedCreateWithoutResume_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResume_eventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResume_eventsNestedInput = {
    create?: XOR<UserCreateWithoutResume_eventsInput, UserUncheckedCreateWithoutResume_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResume_eventsInput
    upsert?: UserUpsertWithoutResume_eventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResume_eventsInput, UserUpdateWithoutResume_eventsInput>, UserUncheckedUpdateWithoutResume_eventsInput>
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserCreateNestedOneWithoutTailoring_analyticsInput = {
    create?: XOR<UserCreateWithoutTailoring_analyticsInput, UserUncheckedCreateWithoutTailoring_analyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTailoring_analyticsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTailoring_analyticsNestedInput = {
    create?: XOR<UserCreateWithoutTailoring_analyticsInput, UserUncheckedCreateWithoutTailoring_analyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTailoring_analyticsInput
    upsert?: UserUpsertWithoutTailoring_analyticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTailoring_analyticsInput, UserUpdateWithoutTailoring_analyticsInput>, UserUncheckedUpdateWithoutTailoring_analyticsInput>
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserCreateNestedOneWithoutSaved_resumesInput = {
    create?: XOR<UserCreateWithoutSaved_resumesInput, UserUncheckedCreateWithoutSaved_resumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaved_resumesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSaved_resumesNestedInput = {
    create?: XOR<UserCreateWithoutSaved_resumesInput, UserUncheckedCreateWithoutSaved_resumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSaved_resumesInput
    upsert?: UserUpsertWithoutSaved_resumesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSaved_resumesInput, UserUpdateWithoutSaved_resumesInput>, UserUncheckedUpdateWithoutSaved_resumesInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InteractionCreateWithoutUserInput = {
    id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedCreateWithoutUserInput = {
    id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionCreateOrConnectWithoutUserInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionCreateManyUserInputEnvelope = {
    data: InteractionCreateManyUserInput | InteractionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeEventCreateWithoutUserInput = {
    id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
  }

  export type ResumeEventUncheckedCreateWithoutUserInput = {
    id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
  }

  export type ResumeEventCreateOrConnectWithoutUserInput = {
    where: ResumeEventWhereUniqueInput
    create: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput>
  }

  export type ResumeEventCreateManyUserInputEnvelope = {
    data: ResumeEventCreateManyUserInput | ResumeEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResumeCreateWithoutUserInput = {
    id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedResumeCreateWithoutUserInput = {
    id?: string
    resume_id: string
    title?: string | null
    created_at?: Date | string
  }

  export type SavedResumeUncheckedCreateWithoutUserInput = {
    id?: string
    resume_id: string
    title?: string | null
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
    id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type TailoringAnalyticsUncheckedCreateWithoutUserInput = {
    id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
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

  export type InteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
    create: XOR<InteractionCreateWithoutUserInput, InteractionUncheckedCreateWithoutUserInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutUserInput, InteractionUncheckedUpdateWithoutUserInput>
  }

  export type InteractionUpdateManyWithWhereWithoutUserInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: StringFilter<"Interaction"> | string
    user_id?: StringFilter<"Interaction"> | string
    action?: StringNullableFilter<"Interaction"> | string | null
    element?: StringNullableFilter<"Interaction"> | string | null
    timestamp?: DateTimeFilter<"Interaction"> | Date | string
    metadata?: JsonNullableFilter<"Interaction">
  }

  export type ResumeEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeEventWhereUniqueInput
    update: XOR<ResumeEventUpdateWithoutUserInput, ResumeEventUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeEventCreateWithoutUserInput, ResumeEventUncheckedCreateWithoutUserInput>
  }

  export type ResumeEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeEventWhereUniqueInput
    data: XOR<ResumeEventUpdateWithoutUserInput, ResumeEventUncheckedUpdateWithoutUserInput>
  }

  export type ResumeEventUpdateManyWithWhereWithoutUserInput = {
    where: ResumeEventScalarWhereInput
    data: XOR<ResumeEventUpdateManyMutationInput, ResumeEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeEventScalarWhereInput = {
    AND?: ResumeEventScalarWhereInput | ResumeEventScalarWhereInput[]
    OR?: ResumeEventScalarWhereInput[]
    NOT?: ResumeEventScalarWhereInput | ResumeEventScalarWhereInput[]
    id?: StringFilter<"ResumeEvent"> | string
    user_id?: StringFilter<"ResumeEvent"> | string
    event_type?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_id?: StringNullableFilter<"ResumeEvent"> | string | null
    resume_text?: StringNullableFilter<"ResumeEvent"> | string | null
    job_description?: StringNullableFilter<"ResumeEvent"> | string | null
    tailored_text?: StringNullableFilter<"ResumeEvent"> | string | null
    ats_score?: IntNullableFilter<"ResumeEvent"> | number | null
    jd_score?: IntNullableFilter<"ResumeEvent"> | number | null
    tailoring_mode?: StringNullableFilter<"ResumeEvent"> | string | null
    version?: IntNullableFilter<"ResumeEvent"> | number | null
    timestamp?: DateTimeFilter<"ResumeEvent"> | Date | string
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
    version?: IntNullableFilter<"Resume"> | number | null
    tailoring_mode?: StringNullableFilter<"Resume"> | string | null
    created_at?: DateTimeFilter<"Resume"> | Date | string
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
    title?: StringNullableFilter<"SavedResume"> | string | null
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
    original_text?: StringFilter<"TailoringAnalytics"> | string
    tailored_text?: StringFilter<"TailoringAnalytics"> | string
    job_description?: StringFilter<"TailoringAnalytics"> | string
    ats_score?: IntFilter<"TailoringAnalytics"> | number
    jd_score?: IntFilter<"TailoringAnalytics"> | number
    tailoring_mode?: StringFilter<"TailoringAnalytics"> | string
    is_refinement?: BoolFilter<"TailoringAnalytics"> | boolean
    iterations?: IntFilter<"TailoringAnalytics"> | number
    golden_passed?: BoolFilter<"TailoringAnalytics"> | boolean
    created_at?: DateTimeFilter<"TailoringAnalytics"> | Date | string
  }

  export type UserCreateWithoutResume_eventsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResume_eventsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResume_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResume_eventsInput, UserUncheckedCreateWithoutResume_eventsInput>
  }

  export type UserUpsertWithoutResume_eventsInput = {
    update: XOR<UserUpdateWithoutResume_eventsInput, UserUncheckedUpdateWithoutResume_eventsInput>
    create: XOR<UserCreateWithoutResume_eventsInput, UserUncheckedCreateWithoutResume_eventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResume_eventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResume_eventsInput, UserUncheckedUpdateWithoutResume_eventsInput>
  }

  export type UserUpdateWithoutResume_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResume_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    resume_events?: ResumeEventCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    resume_events?: ResumeEventUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resume_events?: ResumeEventUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resume_events?: ResumeEventUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTailoring_analyticsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTailoring_analyticsInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTailoring_analyticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTailoring_analyticsInput, UserUncheckedCreateWithoutTailoring_analyticsInput>
  }

  export type UserUpsertWithoutTailoring_analyticsInput = {
    update: XOR<UserUpdateWithoutTailoring_analyticsInput, UserUncheckedUpdateWithoutTailoring_analyticsInput>
    create: XOR<UserCreateWithoutTailoring_analyticsInput, UserUncheckedCreateWithoutTailoring_analyticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTailoring_analyticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTailoring_analyticsInput, UserUncheckedUpdateWithoutTailoring_analyticsInput>
  }

  export type UserUpdateWithoutTailoring_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTailoring_analyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventUncheckedCreateNestedManyWithoutUserInput
    saved_resumes?: SavedResumeUncheckedCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
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
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUncheckedUpdateManyWithoutUserNestedInput
    saved_resumes?: SavedResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSaved_resumesInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventCreateNestedManyWithoutUserInput
    resumes?: ResumeCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSaved_resumesInput = {
    id?: string
    email?: string | null
    anon_user_id: string
    updated_at?: Date | string
    daily_basic_tailorings_used?: number | null
    daily_personalized_tailorings_used?: number | null
    daily_cover_letters_used?: number | null
    daily_reset_date?: Date | string | null
    interactions?: InteractionUncheckedCreateNestedManyWithoutUserInput
    resume_events?: ResumeEventUncheckedCreateNestedManyWithoutUserInput
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
    tailoring_analytics?: TailoringAnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSaved_resumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSaved_resumesInput, UserUncheckedCreateWithoutSaved_resumesInput>
  }

  export type UserUpsertWithoutSaved_resumesInput = {
    update: XOR<UserUpdateWithoutSaved_resumesInput, UserUncheckedUpdateWithoutSaved_resumesInput>
    create: XOR<UserCreateWithoutSaved_resumesInput, UserUncheckedCreateWithoutSaved_resumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSaved_resumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSaved_resumesInput, UserUncheckedUpdateWithoutSaved_resumesInput>
  }

  export type UserUpdateWithoutSaved_resumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUpdateManyWithoutUserNestedInput
    resumes?: ResumeUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSaved_resumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    anon_user_id?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    daily_basic_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_personalized_tailorings_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_cover_letters_used?: NullableIntFieldUpdateOperationsInput | number | null
    daily_reset_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactions?: InteractionUncheckedUpdateManyWithoutUserNestedInput
    resume_events?: ResumeEventUncheckedUpdateManyWithoutUserNestedInput
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    tailoring_analytics?: TailoringAnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InteractionCreateManyUserInput = {
    id: string
    action?: string | null
    element?: string | null
    timestamp?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResumeEventCreateManyUserInput = {
    id: string
    event_type?: string | null
    resume_id?: string | null
    resume_text?: string | null
    job_description?: string | null
    tailored_text?: string | null
    ats_score?: number | null
    jd_score?: number | null
    tailoring_mode?: string | null
    version?: number | null
    timestamp?: Date | string
  }

  export type ResumeCreateManyUserInput = {
    id: string
    resume_text: string
    job_description: string
    modified_resume?: string | null
    ats_score?: number | null
    jd_score?: number | null
    version?: number | null
    tailoring_mode?: string | null
    created_at?: Date | string
  }

  export type SavedResumeCreateManyUserInput = {
    id?: string
    resume_id: string
    title?: string | null
    created_at?: Date | string
  }

  export type TailoringAnalyticsCreateManyUserInput = {
    id: string
    resume_id: string
    original_text: string
    tailored_text: string
    job_description: string
    ats_score: number
    jd_score: number
    tailoring_mode: string
    is_refinement: boolean
    iterations: number
    golden_passed: boolean
    created_at?: Date | string
  }

  export type InteractionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InteractionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    element?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResumeEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableStringFieldUpdateOperationsInput | string | null
    resume_text?: NullableStringFieldUpdateOperationsInput | string | null
    job_description?: NullableStringFieldUpdateOperationsInput | string | null
    tailored_text?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    modified_resume?: NullableStringFieldUpdateOperationsInput | string | null
    ats_score?: NullableIntFieldUpdateOperationsInput | number | null
    jd_score?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tailoring_mode?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
    golden_passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TailoringAnalyticsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resume_id?: StringFieldUpdateOperationsInput | string
    original_text?: StringFieldUpdateOperationsInput | string
    tailored_text?: StringFieldUpdateOperationsInput | string
    job_description?: StringFieldUpdateOperationsInput | string
    ats_score?: IntFieldUpdateOperationsInput | number
    jd_score?: IntFieldUpdateOperationsInput | number
    tailoring_mode?: StringFieldUpdateOperationsInput | string
    is_refinement?: BoolFieldUpdateOperationsInput | boolean
    iterations?: IntFieldUpdateOperationsInput | number
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