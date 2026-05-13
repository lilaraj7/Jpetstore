const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    // baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      config.env.Url = process.env.BASE_URL;
      config.env.username = process.env.USERNAME_JPET;
      config.env.password = process.env.PASSWORD;

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
     

  },
});
