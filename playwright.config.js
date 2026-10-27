import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,
  expect:{
    timeout: 20000,
  },
  use:{
    headless:false,
    screenshot: 'on',
    trace: 'on',
    //viewport: { width: 1920, height: 1080 },
  },
  projects: [
     {
      browserName: 'chromium',
    },

    /*{
      browserName: 'firefox',
        use: { ...devices['Desktop Firefox'] },

    },*/
 
  
  //Mobile Viewports (Mobile Screens):

 /*{
  name: 'Mobile Chrome',
  use: { ...devices['Pixel 5'] },
 },
{
   name: 'Mobile Safari',
  use: { ...devices['iPhone 12'] },
 },*/

],
  });


