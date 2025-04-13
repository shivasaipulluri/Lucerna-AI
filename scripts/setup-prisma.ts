import { execSync } from "child_process"

async function main() {
  console.log("Setting up Prisma with Supabase...")

  // Run Prisma migrations
  console.log("Running Prisma migrations...")
  execSync("npx prisma migrate dev --name init", { stdio: "inherit" })

  // Generate Prisma client
  console.log("Generating Prisma client...")
  execSync("npx prisma generate", { stdio: "inherit" })

  console.log("Setup complete!")
}

main()
  .catch((e) => {
    console.error("Error setting up Prisma:", e)
    process.exit(1)
  })
  .finally(async () => {
    // Close Prisma client
  })
