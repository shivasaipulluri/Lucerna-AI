import { PrismaClient as PrimaryPrismaClient } from './generated/primary_client';
import { PrismaClient as ModelPrismaClient } from './generated/model_client';

const primaryPrisma = new PrimaryPrismaClient();
const modelPrisma = new ModelPrismaClient();

async function seed() {
  try {
    // Seed Primary Database
    const primaryUser = await primaryPrisma.user.create({
      data: {
        email: 'test@example.com',
        is_premium: true,
        full_name: 'Test User',
        company: 'Test Company',
        position: 'Software Engineer',
        education: 'Test University',
        skills: 'JavaScript, TypeScript, React',
        bio: 'Test bio',
        subscription_tier: 'premium',
        subscription_end_date: new Date('2024-12-31'),
      },
    });

    const primaryResume = await primaryPrisma.resume.create({
      data: {
        id: 'test-resume-id-1',
        user_id: primaryUser.id,
        resume_text: 'Test resume text',
        job_description: 'Test job description',
        ats_score: 85,
        jd_score: 90,
      },
    });

    // Seed Model Database
    const modelUser = await modelPrisma.user.create({
      data: {
        email: 'test@example.com',
        anon_user_id: 'test-anon-id',
        daily_basic_tailorings_used: 5,
        daily_personalized_tailorings_used: 3,
        daily_cover_letters_used: 2,
      },
    });

    const modelResume = await modelPrisma.resume.create({
      data: {
        id: 'test-resume-id-2',
        user_id: modelUser.id,
        resume_text: 'Test resume text',
        job_description: 'Test job description',
        ats_score: 85,
        jd_score: 90,
      },
    });

    console.log('Successfully seeded both databases');
  } catch (error) {
    console.error('Error seeding databases:', error);
  } finally {
    await primaryPrisma.$disconnect();
    await modelPrisma.$disconnect();
  }
}

seed(); 