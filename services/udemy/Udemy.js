const axios = require('axios')

class Udemy {
  constructor(value, page) {
    this.value = value
    this.page = page
    this.api = axios.create({
      baseURL: process.env.HOST_UDEMY,
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.ID_UDEMY}:${process.env.SECRET_UDEMY}`,
          'utf-8'
        ).toString('base64')}`,
        'Accept-Encoding': 'gzip,deflate,compress',
      },
    })
  }

  get createSearch() {
    return this.search()
  }

  get createInfo() {
    return this.info()
  }

  get createContent() {
    return this.content()
  }

  async search() {
    const query = await new Promise((resolve) => {
      this.api
        .get(`courses/?search=${this.value}`)
        .then((res) => resolve(res.data.results))
    })
    return query
  }

  async info() {
    const query = await new Promise((resolve) => {
      this.api.get(`courses/${this.value}`).then((res) => resolve(res.data))
    })
    return query
  }

  async content() {
    const query = await new Promise((resolve) => {
      this.api
        .get(`courses/${this.value}/public-curriculum-items/`, {
          params: { page: this.page },
        })
        .then((res) => resolve(res.data))
    })
    return query
  }
}

module.exports = Udemy
