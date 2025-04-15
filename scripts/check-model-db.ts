import { modelPrisma } from "@/lib/model-prisma"

async function main() {
  console.log("Checking model database structure...")

  try {
    // Test connection
    console.log("Testing connection to model database...")
    await modelPrisma.$queryRaw`SELECT 1 as test`
    console.log("Connection successful!")

    // List available tables
    console.log("Checking available tables in the database...")
    const tables = await modelPrisma.$queryRaw`
      SELECT tablename FROM pg_catalog.pg_tables 
      WHERE schemaname = 'public'
    `
    console.log("Available tables:", tables)

    // For each table, list its columns
    for (const table of tables as any[]) {
      const tableName = table.tablename
      console.log(`Checking columns for table: ${tableName}`)

      const columns = await modelPrisma.$queryRaw`
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = ${tableName}
        ORDER BY ordinal_position
      `

      console.log(`Columns in table ${tableName}:`, columns)
    }

    console.log("✅ Database check completed successfully!")
  } catch (error) {
    console.error("❌ Error checking model database:", error)
    process.exit(1)
  } finally {
    await modelPrisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
