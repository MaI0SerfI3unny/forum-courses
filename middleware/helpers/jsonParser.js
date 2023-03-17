const jsonParser = (data) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    //console.error(error)
    return data
  }
}

module.exports = jsonParser
