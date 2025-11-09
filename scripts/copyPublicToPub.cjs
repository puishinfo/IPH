const fs = require('fs');
const path = require('path');

const src = path.join(process.cwd(), 'public');
const dest = path.join(process.cwd(), 'dist', 'pub');

function copyDirSync(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log(`Copying public/ -> dist/pub/`);
  copyDirSync(src, dest);
  console.log('Done copying public files to dist/pub');
  process.exit(0);
} catch (err) {
  console.error('Failed to copy public files to dist/pub:', err);
  process.exit(2);
}
