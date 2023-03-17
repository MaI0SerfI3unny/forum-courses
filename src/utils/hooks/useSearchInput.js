import { useEffect, useState } from 'react'

const useSearchInput = (initial, list) => {
  const [searchInput, setSearchInput] = useState(initial)

  useEffect(() => {
    setSearchInput(initial.replace(/(<(\/?[^>]+)>)/g, ''))
  }, [initial])
  let dataList = list

  let re = new RegExp(searchInput, 'i')

  if (searchInput?.length >= 0) {
    dataList = list
      ?.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      ?.map(({ title, ...props }) => {
        return {
          title: title.replace(re, `<strong>${searchInput}</strong>`),
          ...props,
        }
      })
  }

  return {
    searchInput,
    dataList,
  }
}

export default useSearchInput
