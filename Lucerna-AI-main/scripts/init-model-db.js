import { execSync } from "child_process"

async function main() {
  console.log("Initializing model database...")

  try {
    // Create a migration for the model database
    execSync("npx prisma migrate dev --name init_model_db --schema=prisma/model-schema.prisma", { stdio: "inherit" })

    console.log("Model database initialized successfully!")
  } catch (error) {
    console.error("Error initializing model database:", error)
    process.exit(1)
  }
}

main()
