const puppeteer = require('puppeteer')

class Udacity {
  constructor(value) {
    this.value = value
  }

  get createSearch() {
    return this.search()
  }

  get createContent() {
    return this.content()
  }

  async search() {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(
        `https://www.udacity.com/courses/all?search=${this.value}`
      )
      await page.waitForSelector('.catalog-v2_results__E2dd9', {
        timeout: 1000,
      })

      const body = await page.evaluate(() => {
        const cardsCourses = document.getElementsByClassName(
          'card_container__tm_J1'
        )
        const arr = []
        for (let i = 0; i < cardsCourses.length; i++) {
          const name =
            cardsCourses[i].getElementsByClassName('card_title__6gX9X')[0]
              .innerHTML
          const typePayment =
            cardsCourses[i].getElementsByClassName('card_flag__PGsM1')[0]
              .innerHTML
          const description = cardsCourses[i].getElementsByClassName(
            'card_summary__uxD6t'
          )[0].innerHTML
          const gallery = cardsCourses[i]
            .getElementsByTagName('img')[0]
            .getAttribute('src')
          const time = cardsCourses[i].getElementsByClassName(
            'card_duration__2zXtj'
          )[0].innerHTML
          arr.push({
            link:
              'https://www.udacity.com' + cardsCourses[i].getAttribute('href'),
            name,
            gallery: [gallery],
            typePayment:
              typePayment.charAt(0).toUpperCase() + typePayment.slice(1),
            additional: { description, time },
          })
        }
        return arr
      })
      await browser.close()
      return body
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async content() {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(`${this.value}`)
      await page.waitForSelector('.degree-syllabus_parts__WnYFf', {
        timeout: 1000,
      })

      const body = await page.evaluate(() => {
        const findTableContent = document.getElementsByClassName(
          'degree-syllabus_part__W6T5r'
        )
        const arr = []
        for (let i = 0; i < findTableContent.length; i++) {
          const title =
            findTableContent[i].getElementsByTagName('h5')[0].innerHTML
          const description = findTableContent[i]
            .getElementsByTagName('div')[0]
            .innerHTML.replace(/(<([^>]+)>)/gi, '')
            .replace(/(\n|\n)/gm, '')
          arr.push({
            class: 'chapter',
            title,
            description,
          })
        }
        return arr
      })
      await browser.close()
      return body
    } catch (error) {
      return []
    }
  }
}

module.exports = Udacity
