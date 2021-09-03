require('dotenv').config()
const puppeteer = require('puppeteer')
const username = process.env.USERNAME
const password = process.env.PASSWORD
// const consumerName = 'fraud-marketplace-fakes-buybox-items'
const consumerName = 'action-events'
let success = false
let attempts = 0

const runBot = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1230,
    height: 835,
  })
  await page.goto('https://web.furycloud.io/login')
  await page.waitForSelector('input[name=username]')
  await page.type('input[name=username]', username)
  await page.type('input[name=password]', password)
  await page.click('button[type=submit]')
  await page.waitForSelector('button[type=button]')
  await page.goto(
    'https://web-legacy.furycloud.io/#/fraud-judge/admin/services/bigqueuenew'
  )
  await page.waitForSelector('input[id=search]')

  await page.type('input[id=search]', consumerName)
  await page.waitForSelector('i[class="glyphicon glyphicon-eye-open"]')
  await page.waitForTimeout(5000)
  await page.click('i[class="glyphicon glyphicon-eye-open"]')

  while (success === false) {
    try {
      await page.waitForSelector('textarea', {
        timeout: attempts === 0 ? 30000 : 2000,
      })

      const message = await page.evaluate(() => {
        return document.getElementsByTagName('textarea')[0].value
      })

      console.log('Message: ' + message)

      success = true
    } catch (error) {
      attempts += 1

      await page.evaluate(() => {
        document.getElementsByTagName('button')[2].click()
      })

      console.log(`Failed to fetch message, retrying. Attempts: ${attempts}`)
    }
  }

  await browser.close()
}

runBot()
