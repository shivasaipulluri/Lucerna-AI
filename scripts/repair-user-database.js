const { PrismaClient } = require("@prisma/client")
const { createClient } = require("@supabase/supabase-js")

async function main() {
  console.log("Starting database repair...")

  // Initialize Prisma client
  const prisma = new PrismaClient()

  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase environment variables")
    return
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    // Get all users from Supabase
    const { data: supabaseUsers, error } = await supabase.auth.admin.listUsers()

    if (error) {
      console.error("Error fetching Supabase users:", error)
      return
    }

    console.log(`Found ${supabaseUsers.users.length} users in Supabase`)

    // Get all users from our database
    const dbUsers = await prisma.user.findMany()
    console.log(`Found ${dbUsers.length} users in our database`)

    // Create a map of email to user ID for database users
    const dbEmailToId = new Map()
    for (const user of dbUsers) {
      dbEmailToId.set(user.email.toLowerCase(), user.id)
    }

    // Process each Supabase user
    for (const supabaseUser of supabaseUsers.users) {
      const email = supabaseUser.email?.toLowerCase()
      const id = supabaseUser.id

      if (!email) continue

      // Check if user exists in our database with the same ID
      const dbUser = dbUsers.find((u) => u.id === id)

      if (dbUser) {
        console.log(`User ${id} (${email}) exists in both systems`)
        continue
      }

      // Check if user exists with the same email but different ID
      const existingIdWithEmail = dbEmailToId.get(email)

      if (existingIdWithEmail) {
        console.log(`User with email ${email} exists with different ID: ${existingIdWithEmail} vs ${id}`)

        // Option 2: Create a new user with a modified email
        const modifiedEmail = `${email}#${id.substring(0, 8)}`
        console.log(`Creating user with modified email: ${modifiedEmail}`)

        await prisma.user.create({
          data: {
            id,
            email: modifiedEmail,
            is_premium: false,
            tailoring_mode: "personalized",
          },
        })

        console.log(`Created user ${id} with modified email ${modifiedEmail}`)
      } else {
        // User doesn't exist in our database, create them
        console.log(`Creating missing user ${id} (${email})`)

        await prisma.user.create({
          data: {
            id,
            email,
            is_premium: false,
            tailoring_mode: "personalized",
          },
        })

        console.log(`Created user ${id}`)
      }
    }

    console.log("Database repair completed successfully")
  } catch (error) {
    console.error("Error repairing database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
