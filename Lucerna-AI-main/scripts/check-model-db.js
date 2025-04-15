const { modelPrisma } = require("../lib/model-prisma")

async function main() {
  console.log("Checking model database connection...")

  try {
    // Try to query the database
    const userCount = await modelPrisma.user.count()
    console.log(`Connection successful! Found ${userCount} users in the model database.`)

    // Check if tables exist
    const resumeEventCount = await modelPrisma.resumeEvent.count()
    const interactionCount = await modelPrisma.interaction.count()

    console.log(`Resume events: ${resumeEventCount}`)
    console.log(`Interactions: ${interactionCount}`)
    
    console.log("Model database is properly configured!")
  } catch (error) {
    console.error("Error connecting to model database:", error)
    console.log("\nPossible issues:")
    console.log("1. MODEL_DATABASE_URL environment variable is not set correctly")
    console.log("2. Database does not exist or is not accessible")
    console.log("3. Tables have not been created (run 'npm run init-model-db')")
    console.log("Available models on modelPrisma:", Object.keys(modelPrisma))
    process.exit(1)
  } finally {
    await modelPrisma.$disconnect()
  }
}

main()
