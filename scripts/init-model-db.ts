import { modelPrisma } from "../lib/model-prisma"

async function main() {
  try {
    console.log("Testing connection to model database...")
    await modelPrisma.$queryRaw`SELECT 1 as test`
    console.log("Connection successful!")

    // Create tables if they don't exist
    console.log("Creating tables if they don't exist...")

    // This is just a simple query to check if we can create data
    const testUser = await modelPrisma.user.upsert({
      where: { anonUserId: "test_user" },
      update: {},
      create: {
        anonUserId: "test_user",
        id: "test_supabase_id",
        email: "test@example.com",
      },
    })

    console.log("Test user created/updated:", testUser)
    console.log("Database initialization complete!")
  } catch (error) {
    console.error("Error initializing database:", error)
  } finally {
    await modelPrisma.$disconnect()
  }
}

main()
