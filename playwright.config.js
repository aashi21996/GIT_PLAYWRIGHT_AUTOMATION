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
    screenshot: 'on',
    trace: 'on',
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

