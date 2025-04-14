const { PrismaClient } = require('../generated/primary_client')
    
// Initialize Prisma client
const prisma = new PrismaClient()

async function main() {
  console.log("🔍 Starting test analytics data generation...")

  try {
    // ✅ Check if tailoring_analytics table exists
    const tableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'tailoring_analytics'
      );
    `

    if (!tableExists[0]?.exists) {
      console.log("❌ tailoring_analytics table doesn't exist. Please create it first.")
      return
    }

    console.log("✅ tailoring_analytics table exists. Proceeding...")

    // ✅ Fetch users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    })

    if (users.length === 0) {
      console.log("❌ No users found in the database.")
      return
    }

    console.log(`📋 Found ${users.length} users.`)

    for (const user of users) {
      console.log(`🧑‍💼 Processing user: ${user.email}`)

      // ✅ Get all resumes for user
      const resumes = await prisma.resume.findMany({
        where: {
          user_id: user.id,
        },
        select: {
          id: true,
          tailoring_mode: true,
          ats_score: true,
          jd_score: true,
          version: true,
        },
      })

      if (resumes.length === 0) {
        console.log(`  ⚠️ No resumes for user ${user.email}. Skipping.`)
        continue
      }

      console.log(`  📄 Found ${resumes.length} resumes.`)

      for (const resume of resumes) {
        if (resume.ats_score === null || resume.jd_score === null) {
          console.log(`    ⚠️ Resume ${resume.id} has no scores. Skipping.`)
          continue
        }

        const tailoringMode = resume.tailoring_mode || "personalized"
        const iterations = resume.version || 1
        const atsScore = resume.ats_score
        const jdScore = resume.jdScore
        const goldenPassed = atsScore >= 95 && jdScore >= 95

        // ✅ Check if entry exists already
        const existingAnalytics = await prisma.$queryRaw`
          SELECT id FROM "tailoring_analytics" 
          WHERE "resume_id" = ${resume.id}::text 
          LIMIT 1;
        `

        if (existingAnalytics.length > 0) {
          console.log(`    ⚠️ Entry exists for resume ${resume.id}. Skipping.`)
          continue
        }

        const randomId = `test-${Date.now()}-${Math.floor(Math.random() * 1000)}`

        try {
          await prisma.$executeRaw`
            INSERT INTO "tailoring_analytics" 
              ("id", "user_id", "resume_id", "tailoring_mode", "iterations", "ats_score", "jd_score", "golden_passed", "created_at")
            VALUES 
              (${randomId}, ${user.id}::text, ${resume.id}::text, ${tailoringMode}, ${iterations}, ${atsScore}, ${jdScore}, ${goldenPassed}, NOW());
          `
          console.log(`    ✅ Inserted entry for resume ${resume.id}`)
        } catch (error) {
          console.error(`    ❌ Failed to insert entry for resume ${resume.id}:`, error)
        }
      }

      // ✅ Add 3 extra random test entries for variety
      const resumeIds = resumes.map((r) => r.id)
      const modes = ["basic", "personalized", "aggressive"]

      for (let i = 0; i < 3; i++) {
        const resumeId = resumeIds[Math.floor(Math.random() * resumeIds.length)]
        const mode = modes[i % 3]
        const iterations = Math.floor(Math.random() * 3) + 1
        const atsScore = Math.floor(Math.random() * 10) + 85
        const jdScore = Math.floor(Math.random() * 10) + 85
        const goldenPassed = atsScore >= 95 && jdScore >= 95
        const randomId = `test-extra-${Date.now()}-${Math.floor(Math.random() * 1000)}-${i}`

        try {
          const pastDate = new Date()
          pastDate.setDate(pastDate.getDate() - Math.floor(Math.random() * 7))

          await prisma.$executeRaw`
            INSERT INTO "tailoring_analytics" 
              ("id", "user_id", "resume_id", "tailoring_mode", "iterations", "ats_score", "jd_score", "golden_passed", "created_at")
            VALUES 
              (${randomId}, ${user.id}::text, ${resumeId}::text, ${mode}, ${iterations}, ${atsScore}, ${jdScore}, ${goldenPassed}, ${pastDate});
          `

          console.log(`    ✅ Added test entry in mode "${mode}"`)
        } catch (error) {
          console.error(`    ❌ Error inserting extra test analytics:`, error)
        }
      }
    }

    console.log("🎉 All test analytics data created successfully.")
    await checkExistingAnalytics()
  } catch (err) {
    console.error("❌ Unexpected error:", err)
  } finally {
    await prisma.$disconnect()
  }
}

async function checkExistingAnalytics() {
  console.log("🔍 Checking existing analytics data...")

  try {
    // Get count of analytics entries
    const analyticsCount = await prisma.$queryRaw`
      SELECT COUNT(*) as count FROM "tailoring_analytics";
    `

    console.log(`📊 Total analytics entries: ${analyticsCount[0].count}`)

    // Get the most recent entries
    const recentAnalytics = await prisma.$queryRaw`
      SELECT 
        id, 
        user_id, 
        resume_id, 
        tailoring_mode, 
        iterations, 
        ats_score, 
        jd_score, 
        golden_passed, 
        created_at
      FROM tailoring_analytics
      ORDER BY created_at DESC
      LIMIT 5;
    `

    console.log(`📋 Most recent entries (${recentAnalytics.length}):`)
    recentAnalytics.forEach((entry, i) => {
      console.log(
        `  ${i + 1}. ID: ${entry.id.substring(0, 8)}... | Mode: ${entry.tailoring_mode} | Created: ${entry.created_at}`,
      )
    })
  } catch (err) {
    console.error("❌ Error checking analytics:", err)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
