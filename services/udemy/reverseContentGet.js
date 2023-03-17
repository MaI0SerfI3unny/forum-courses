const Udemy = require('@/services/udemy/Udemy')

async function reverseContentGet(id, data = [], starter_point = 1) {
  const newArr = [...data]
  try {
    const udemyContent = await new Udemy(id, starter_point).createContent
    udemyContent.results.map((el) => {
      newArr.push({
        class: el._class,
        title: el.title,
        created: el.created,
        description: el.description,
      })
    })
    starter_point++
    if (udemyContent.next !== null) {
      return await reverseContentGet(id, newArr, starter_point)
    }
    return newArr
  } catch (_) {
    return data
  }
}

module.exports = reverseContentGet
