# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick commands

- Install deps:
    - npm install
- Dev (API only, with nodemon):
    - npm run dev
- Dev (API + assets; runs 3 watchers: server, esbuild, Tailwind):
    - npm run dev
- Build assets (watch mode):
    - npm run build-scripts
    - npm run watch-tailwind
- Tests (Jest + Supertest):
    - All tests: npm test
    - Single file: npm test -- **tests**/app.test.js
    - Filter by name: npm test -- -t "HealthCheck"
