import { writeFileSync } from 'fs';
writeFileSync('dist/build-info.txt', new Date().toISOString());
