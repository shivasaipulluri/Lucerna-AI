import { execSync } from "child_process"

async function main() {
  console.log("Initializing Prisma migration...")

  try {
    // Create a baseline migration from the current database schema
    execSync("npx prisma migrate dev --name init_schema --create-only", { stdio: "inherit" })

    console.log("Baseline migration created. Now applying migrations...")

    // Apply the migration
    execSync("npx prisma migrate dev", { stdio: "inherit" })

    // Generate Prisma client
    execSync("npx prisma generate", { stdio: "inherit" })

    console.log("Migration initialization completed successfully!")
  } catch (error) {
    console.error("Error initializing migration:", error)
  }
}

main().catch((e) => {
  console.error("Migration script error:", e)
  process.exit(1)
})
