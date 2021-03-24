import path from 'path';

import { config as buildConfig } from './wdio.conf';

buildConfig.capabilities = [{
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

buildConfig.port = 9516;
buildConfig.services = [
    [
        'chromedriver',
        {
            chromeDriverArgs: ['--port=9516', '--url-base=\'/\''],
        },
    ],
    [
        'static-server',
        {
            port: 8080,
            folders: [
                { mount: '/', path: path.join(__dirname, 'demo-app') },
            ],
        },
    ],
];
buildConfig.path = '/';
buildConfig.beforeFeature = () => {
    /**
     * check if static website is up and cancel if not
     */
    (browser as WebdriverIO.Browser).url('/');
    const pageTitle = (browser as WebdriverIO.Browser).getTitle();
    if (pageTitle !== 'DEMO APP') {
        console.error(`Demo app is not up, found ${pageTitle}`);
        console.log((browser as WebdriverIO.Browser).getPageSource());
        process.exit(1);
    }
};

if (process.env.CI) {
    buildConfig.outputDir = path.join(__dirname, 'logs');
}

export const config = buildConfig;
