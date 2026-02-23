import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node18',

  outDir: 'dist',
  clean: true,
  sourcemap: false,

  splitting: false,
  bundle: true,

  // 🔥 THIS IS THE FIX
  noExternal: ['@repo/db','@repo/schemas','@repo/store','better-auth','@better-auth/expo','better-auth/adapters/drizzle'],

  // Native deps only
  external: ['pg'],
})
