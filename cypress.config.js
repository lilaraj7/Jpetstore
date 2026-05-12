const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    // baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      config.env.Url = process.env.BASE_URL;
      config.env.username = process.env.USERNAME_JPET;
      config.env.password = process.env.PASSWORD;

      return config;
    },
  },
});
