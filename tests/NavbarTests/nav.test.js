const puppeteer = require('puppeteer')

let browser, page;
jest.setTimeout(300000)

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    })
    page = await browser.newPage()
    await page.goto("http://localhost:3100/")
})

afterEach(async () => {
    await browser.close()
})


test("Click on about tab redirects user to about page", async () => {
    await page.click("a[href='/about']")
    const title = await page.$eval('.OurStory__data-header', e => e.innerHTML)
    expect(title).toEqual("2004")
})

test('checking if CI works', async () => {
    expect(1+1).toEqual(2)
})