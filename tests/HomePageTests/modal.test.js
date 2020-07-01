const puppeteer = require('puppeteer')

let browser, page;
jest.setTimeout(300000)

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    })
    page = await browser.newPage()
    await page.goto("http://localhost:3000/")
    await page.click('.Header__about-btn-modal')
})

afterEach(async () => {
    await browser.close()
})


test('Click on log in opens log in modal', async () => {
    const message = await page.$eval(".AuthModal__blurb", e => e.innerHTML)
    expect(message).toEqual("Log in as an administrator")
})

test('Clicking on sign up blurb changes modal', async () => {
    await page.click('.AuthModal__switch')
    const message = await page.$eval('.AuthModal__blurb', e => e.innerHTML)
    expect(message).toEqual('Only administrator can sign up')
})

