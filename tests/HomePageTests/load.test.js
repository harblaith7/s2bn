// const puppeteer = require('puppeteer')

// let browser, page;
// jest.setTimeout(300000)

// beforeEach(async () => {
//     browser = await puppeteer.launch({
//         headless: false
//     })
//     page = await browser.newPage()
//     await page.goto("http://localhost:3100/")
// })

// afterEach(async () => {
//     await browser.close()
// })

// test("Appropriate text appears on landing page", async () => {
//     const html = await page.$eval(".Header__text", e => e.innerHTML)
//     expect(html).toEqual("We help students gain a competitive edge in both school and business")
// })

test('checking if CI works', async () => {
    expect(1+1).toEqual(2)
})

