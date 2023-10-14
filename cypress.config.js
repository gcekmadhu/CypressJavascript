const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bbigq3",
  retries:{
    runMode:1
  },
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    
  },
  env: {
    baseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account",
    loginUrl: '/login',
  },


});
