const puppeteer = require('puppeteer')
const keys = require('../../config/dev')

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

test("Login in with invalid credentials triggers an error", async () => {
    // Writing incorrect values to the login inputs 
    await page.focus("input[name=email]")
    await page.keyboard.type("dummy@dummy.com")
    await page.focus("input[name=password]")
    await page.keyboard.type("dummy")
    
    // Submitting info
    await page.click('.AuthModal__submit')

    // Waiting for alert to pop up and then testing its content
    await page.waitForSelector(".Alert__message")
    let alert = await page.$eval('.Alert__message', e => e.innerHTML)
    expect(alert).toEqual("Invalid Credentials")
})

test("Not passing in a password triggers password alert", async () => {
    await page.focus('input[name=email]')
    await page.keyboard.type('dummy@dummy.com')
    await page.click('.AuthModal__submit')
    await page.waitForSelector('.Alert__message')
    let alert = await page.$eval('.Alert__message', e => e.innerHTML)
    expect(alert).toEqual("Please input a password")
})

test("Passing in valid inputs redirects users to dashboard page", async () => {
    await page.focus('input[name=email]')
    await page.keyboard.type(keys.email)
    await page.focus("input[name=password]")
    await page.keyboard.type(keys.password)
    await page.click('.AuthModal__submit')
    await page.waitForNavigation();
    const url = await page.url();
    expect(url).toMatch(/dashboard/)
})
