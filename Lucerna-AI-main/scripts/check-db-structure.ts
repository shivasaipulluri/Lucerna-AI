import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Checking database structure...")

  const prisma = new PrismaClient()

  try {
    // List all tables in the database
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `

    console.log("Tables in database:", tables)

    // For each table, list its columns
    for (const table of tables as any[]) {
      const tableName = table.table_name

      const columns = await prisma.$queryRaw`
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = ${tableName}
        ORDER BY ordinal_position;
      `

      console.log(
        `
Columns in table ${tableName}:`,
        columns,
      )
    }
  } catch (error) {
    console.error("Error checking database structure:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
