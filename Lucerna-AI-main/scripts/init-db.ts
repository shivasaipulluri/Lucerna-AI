import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Initializing database...")

  const prisma = new PrismaClient()

  try {
    // Check if the database is accessible
    await prisma.$connect()
    console.log("Database connection successful")

    // Check if tables exist
    const tableCount = await prisma.$queryRaw`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `
    console.log("Tables found:", tableCount)

    // Create tables if they don't exist
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        is_premium BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS resumes (
        id UUID PRIMARY KEY,
        user_id UUID NOT NULL,
        resume_text TEXT NOT NULL,
        job_description TEXT NOT NULL,
        modified_resume TEXT,
        ats_score INTEGER,
        jd_score INTEGER,
        version INTEGER DEFAULT 1,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `

    console.log("Database initialization complete")
  } catch (error) {
    console.error("Database initialization failed:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
