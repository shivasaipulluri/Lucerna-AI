const { execSync } = require("child_process")

console.log("Generating Prisma client for model database...")

try {
  // Generate the Prisma client for the model schema
  execSync("npx prisma generate --schema=prisma/model-schema.prisma", { stdio: "inherit" })

  console.log("✅ Model Prisma client generated successfully!")
} catch (error) {
  console.error("❌ Error generating Model Prisma client:", error)
  process.exit(1)
}
