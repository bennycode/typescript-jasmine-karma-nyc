import {Config, ConfigOptions} from 'karma';
import jasmineConfig from './jasmine.json';

module.exports = function (config: Config) {
  const options: ConfigOptions = {
    "autoWatch": false,
    "basePath": jasmineConfig.spec_dir,
    "browsers": [
      "ChromeHeadless"
    ],
    "colors": true,
    "concurrency": Infinity,
    "exclude": [],
    "files": [
      "**/*.ts"
    ],
    "frameworks": [
      "karma-typescript",
      "jasmine"
    ],
    "logLevel": config.LOG_INFO,
    "port": 9876,
    "preprocessors": {
      "**/*.ts": "karma-typescript"
    },
    "reporters": [
      "progress"
    ],
    "singleRun": true
  };

  config.set(options);
};
