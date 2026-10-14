import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,
  expect:{
    timeout: 40000,
  },
  use:{
    headless:false,
  },
  projects: [
     {
      browserName: 'chromium',
    },

    {
      browserName: 'firefox',
    },
 
  ],

});

