import { execSync } from "child_process"

async function main() {
  console.log("Introspecting database to generate Prisma schema...")

  try {
    // Introspect the database and generate a schema.prisma file
    execSync("npx prisma db pull", { stdio: "inherit" })

    console.log("Database introspection completed. Schema file generated.")

    // Generate Prisma client based on the introspected schema
    execSync("npx prisma generate", { stdio: "inherit" })

    console.log("Prisma client generated successfully!")
  } catch (error) {
    console.error("Error during database introspection:", error)
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
