const fs = require('fs');
const path = require('path');

function logPathInfo(path) {
  try {
    const stats = fs.statSync(path);
    console.log(`Path: ${path}`);
    console.log(`Exists: ${fs.existsSync(path)}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log('---');
  } catch (error) {
    console.log(`Path: ${path}`);
    console.log(`Error: ${error.message}`);
    console.log('---');
  }
}

function listDirectoryContents(dir) {
  try {
    const files = fs.readdirSync(dir);
    console.log(`Contents of ${dir}:`);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      logPathInfo(filePath);
    });
  } catch (error) {
    console.log(`Error reading directory ${dir}: ${error.message}`);
  }
}

console.log('Starting Prisma debug...');

// Check Prisma directories
const prismaDir = path.join(process.cwd(), 'prisma');
const generatedDir = path.join(prismaDir, 'generated');
const primaryClientDir = path.join(generatedDir, 'primary_client');
const nextDir = path.join(process.cwd(), '.next');
const serverDir = path.join(nextDir, 'server');

console.log('Checking Prisma directories...');
logPathInfo(prismaDir);
logPathInfo(generatedDir);
logPathInfo(primaryClientDir);
logPathInfo(nextDir);
logPathInfo(serverDir);

// List contents of important directories
console.log('\nListing directory contents...');
listDirectoryContents(primaryClientDir);
listDirectoryContents(serverDir);

// Check for query engine files
console.log('\nChecking for query engine files...');
const engineFiles = [
  'libquery_engine-rhel-openssl-3.0.x.so.node',
  'libquery_engine-linux-musl-openssl-3.0.x.so.node',
  'query-engine-rhel-openssl-3.0.x.node',
  'query-engine-linux-musl-openssl-3.0.x.node'
];

engineFiles.forEach(file => {
  const primaryPath = path.join(primaryClientDir, file);
  const serverPath = path.join(serverDir, file);
  console.log(`\nChecking ${file}...`);
  logPathInfo(primaryPath);
  logPathInfo(serverPath);
});

console.log('\nDebug completed.'); 