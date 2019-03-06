import {Config, ConfigOptions} from 'karma';
import jasmineConfig from './jasmine.json';

module.exports = function(config: Config) {
  const options: ConfigOptions = {
    autoWatch: false,
    basePath: jasmineConfig.spec_dir,
    browsers: ['ChromeHeadless'],
    colors: true,
    concurrency: Infinity,
    exclude: jasmineConfig.spec_files,
    files: ['**/*.ts'],
    frameworks: ['jasmine', 'karma-typescript'],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress', 'karma-typescript'],
    singleRun: true,
  };

  const karmaTypescriptConfig = {
    karmaTypescriptConfig: {
      reports: {
        html: {
          directory: process.cwd(),
          subdirectory: 'coverage/browser',
        },
        json: {
          directory: process.cwd(),
          subdirectory: '.nyc_output',
          filename: 'coverage-browser.json',
        },
      },
    },
  };

  config.set({...options, ...karmaTypescriptConfig});
};
