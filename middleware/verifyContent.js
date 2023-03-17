const verifyTime = (time) => {
  const parsedTime = time.split(':')
  if (parsedTime.length !== 2) return false
  if (parsedTime[0] < 0 || parsedTime[1] < 0) return false
  if (parsedTime[0] > 23 || parsedTime[1] > 59) return false
  return true
}

const verifyContent = (arr) => {
  if (typeof arr === 'object') {
    arr.map((section) => {
      if (
        !section.name ||
        !section.content ||
        typeof section.name !== 'string' ||
        typeof section.content !== 'object'
      )
        return false
      section.content.map((lesson) => {
        if (
          !lesson.name ||
          !lesson.time ||
          !lesson.description ||
          typeof lesson.name !== 'string' ||
          typeof lesson.time !== 'string' ||
          typeof lesson.description !== 'string' ||
          verifyTime(lesson.time) !== true
        )
          return false
      })
    })
    return true
  } else {
    return false
  }
}

module.exports = verifyContent
