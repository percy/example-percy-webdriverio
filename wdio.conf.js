exports.config = {
  runner: 'local',
  framework: 'mocha',
  reporters: ['spec'],
  specs: ['./specs/*.test.js'],

  logLevel: 'warn',
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome'
    }
  ],

  services: [
    ['chromedriver', {
        logFileName: 'wdio-chromedriver.log', // default
        outputDir: 'driver-logs', // overwrites the config.outputDir
        args: ['--silent']
    }]],

  /* onPrepare() {
    require('geckodriver').start();
  },

  onComplete() {
    require('geckodriver').stop();
  } */
};
