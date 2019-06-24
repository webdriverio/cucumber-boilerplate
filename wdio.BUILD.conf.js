const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--disable-infobars',
            '--window-size=1280,800',
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
        ],
    },
}];

wdioConfig.port = 9516;
wdioConfig.config.services = ['chromedriver'];
wdioConfig.config.path = '/';
wdioConfig.chromeDriverArgs = ['--port=9516', '--url-base=\'/\''];

exports.config = wdioConfig.config;
