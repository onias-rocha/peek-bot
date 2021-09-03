const puppeteer = require('puppeteer')

const username = ''
const password = ''
const consumerName = ''
let deuCerto = false
let tentativas = 0

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
  // await page.waitForTimeout(5000)
  await page.waitForSelector('button[type=button]')
  await page.goto(
    'https://web-legacy.furycloud.io/#/fraud-judge/admin/services/bigqueuenew'
  )
  await page.waitForSelector('input[id=search]')

  await page.type('input[id=search]', consumerName)
  await page.waitForSelector('i[class="glyphicon glyphicon-eye-open"]')
  await page.waitForTimeout(5000)
  await page.click('i[class="glyphicon glyphicon-eye-open"]')

  while (deuCerto === false) {
    // await page.setDefaultNavigationTimeout(4000)
    try {
      await page.waitForSelector('textarea', {
        timeout: tentativas === 0 ? 30000 : 2000,
      })

      const corpoDaMensagem = await page.evaluate(() => {
        return document.getElementsByTagName('textarea')[0].value
      })

      console.log('Message: ' + corpoDaMensagem)

      deuCerto = true
    } catch (error) {
      tentativas += 1

      await page.evaluate(() => {
        document.getElementsByTagName('button')[2].click()
      })

      console.log(
        `Nenhuma mensagem obtida, tentando novamente. Tentativas: ${tentativas}`
      )
    }
  }

  await browser.close()
}

runBot()
