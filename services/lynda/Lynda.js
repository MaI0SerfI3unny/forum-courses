const puppeteer = require('puppeteer')

class Lynda {
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
        `https://www.linkedin.com/learning/search?keywords=${this.value}`
      )
      await page.waitForSelector('.results-list', { timeout: 1000 })

      const body = await page.evaluate(() => {
        const cardsCourses =
          document.getElementsByClassName('results-list__item')
        const arr = []
        for (let i = 0; i < cardsCourses.length; i++) {
          const title = cardsCourses[i]
            .getElementsByClassName('base-search-card__title')[0]
            .innerHTML.trim()
          const link = cardsCourses[i]
            .getElementsByTagName('a')[0]
            .getAttribute('href')
          const gallery = cardsCourses[i].getElementsByTagName('img')[0]
          const time = cardsCourses[i]
            .getElementsByClassName('search-entity-media__duration')[0]
            .innerHTML.trim()
          arr.push({
            title,
            link,
            source: 'lynda',
            typePayment: 'Paid',
            gallery: [
              gallery.getAttribute('src') !== null
                ? gallery.getAttribute('src')
                : gallery.getAttribute('data-delayed-url'),
            ],
            additional: { time },
          })
        }
        return arr
      })
      await browser.close()
      return body
    } catch (e) {
      console.log(e)
      return []
    }
  }

  async content() {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(`${this.value}`)
      await page.waitForSelector('.toc-section', { timeout: 1000 })
      await page.click('button.show-more-less__button')

      const body = await page.evaluate(() => {
        const cardsCourses = document.getElementsByClassName('show-more-less')
        const arr = []
        for (let i = 0; i < cardsCourses.length; i++) {
          const title = cardsCourses[i]
            .getElementsByClassName('show-more-less__button')[0]
            .innerText.trim()
          const chapterCourse =
            cardsCourses[i].getElementsByClassName('toc-item')
          arr.push({ class: 'chapter', title })
          for (let j = 0; j < chapterCourse.length; j++) {
            const title = chapterCourse[j]
              .getElementsByClassName('table-of-contents__item-title')[0]
              .innerText.trim()
            const time = chapterCourse[j]
              .getElementsByClassName('table-of-contents__item-duration')[0]
              .innerText.trim()
            arr.push({ class: 'lecture', title, time })
          }
        }
        return arr
      })
      await browser.close()
      return body
    } catch (e) {
      console.log(e)
      return []
    }
  }
}

module.exports = Lynda
