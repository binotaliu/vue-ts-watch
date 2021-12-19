const mix = require('laravel-mix');

mix.vue()
mix.ts('src/app.js', 'dist')
mix.setPublicPath('dist')

