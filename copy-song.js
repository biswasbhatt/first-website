const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'vidssave.com Full Song_ Tujhe Kitna Chahne Lage _ Kabir Singh _ Mithoon Feat. Arijit Singh _ Shahid K, Kiara A low.mp4');
const targetDir = path.join(__dirname, 'public', 'assets', 'audio');
const target = path.join(targetDir, 'tujhe-kitna-chahne-lage-hum.mp4');

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);

console.log(JSON.stringify({ source, target, exists: fs.existsSync(target), size: fs.statSync(target).size }, null, 2));
