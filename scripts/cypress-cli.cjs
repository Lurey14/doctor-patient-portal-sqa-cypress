const { spawnSync } = require('node:child_process');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const localCypress = path.join(projectRoot, 'node_modules', 'cypress', 'bin', 'cypress');

process.env.CYPRESS_CACHE_FOLDER = path.join(projectRoot, '.cache', 'Cypress');

const result = spawnSync(process.execPath, [localCypress, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: process.env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
