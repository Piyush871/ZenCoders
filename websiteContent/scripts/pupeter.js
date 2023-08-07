const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false, // to see the browser GUI
        executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        userDataDir: '/Users/piyushjaiswal/Library/Application Support/Google/Chrome/new Profile' // replace with your profile path
    });

    const page = await browser.newPage();
    await page.goto('https://www.google.com');

    // Don't close the browser
    // await browser.close();
})();
