import { execSync } from "child_process"

async function main() {
  console.log("Running migration to add tailoring_mode field...")

  try {
    // Run Prisma migration
    execSync("npx prisma migrate dev --name add_tailoring_mode", { stdio: "inherit" })

    // Generate Prisma client
    execSync("npx prisma generate", { stdio: "inherit" })

    console.log("Migration completed successfully!")
  } catch (error) {
    console.error("Error running migration:", error)
  }
}

main().catch((e) => {
  console.error("Migration script error:", e)
  process.exit(1)
})
