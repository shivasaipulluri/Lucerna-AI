const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to copy files
function copyFiles(src, dest) {
  if (fs.existsSync(src)) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  }
}

try {
  console.log('Starting custom build process...');

  // Generate Prisma clients
  console.log('Generating Prisma clients...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Define paths
  const prismaDir = path.join(process.cwd(), 'prisma');
  const generatedDir = path.join(prismaDir, 'generated');
  const primaryClientDir = path.join(generatedDir, 'primary_client');
  const nextDir = path.join(process.cwd(), '.next');
  const serverDir = path.join(nextDir, 'server');

  // Ensure directories exist
  ensureDir(primaryClientDir);
  ensureDir(serverDir);

  // Copy query engine files
  const engineFiles = [
    'libquery_engine-rhel-openssl-3.0.x.so.node',
    'libquery_engine-linux-musl-openssl-3.0.x.so.node',
    'query-engine-rhel-openssl-3.0.x.node',
    'query-engine-linux-musl-openssl-3.0.x.node'
  ];

  engineFiles.forEach(file => {
    const src = path.join(primaryClientDir, file);
    const dest = path.join(serverDir, file);
    copyFiles(src, dest);
  });

  // Copy schema files
  const schemaFiles = ['schema.prisma'];
  schemaFiles.forEach(file => {
    const src = path.join(prismaDir, file);
    const dest = path.join(serverDir, file);
    copyFiles(src, dest);
  });

  console.log('Build process completed successfully!');
} catch (error) {
  console.error('Build process failed:', error);
  process.exit(1);
} 