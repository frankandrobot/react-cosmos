#!/usr/bin/env node

// Set the env before any code reads it
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('regenerator-runtime/runtime');
const { startWebServer } = require('../dist/webServer');

startWebServer().catch(err => {
  console.log('[Cosmos] Server crashed...');
  console.log(`\n  (╯°□°)╯︵ ┻━┻\n`);
  console.log(err);
  process.exit(1);
});
