function stringAvatar(name) {
  if (!name) {
    return {}
  }
  if (typeof name === 'object') {
    return {
      children: `${name.firstName?.[0] ?? ''}${name.lastName?.[0] ?? ''}`,
    }
  }
  const nameWords = name.split(' ')
  const shortName = `${nameWords?.[0]?.[0] ?? ''}${nameWords?.[1]?.[0] ?? ''}`

  return {
    children: shortName,
  }
}

export default stringAvatar
