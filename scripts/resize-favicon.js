const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/faviconPace.png');
const outputDir = path.join(__dirname, '../public');

// Create different sizes
const sizes = [
  { name: 'favicon.ico', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 }
];

async function resizeImages() {
  for (const { name, size } of sizes) {
    await sharp(inputPath)
      .resize(size, size)
      .toFile(path.join(outputDir, name));
    console.log(`Created ${name} (${size}x${size})`);
  }
}

resizeImages().catch(console.error); 