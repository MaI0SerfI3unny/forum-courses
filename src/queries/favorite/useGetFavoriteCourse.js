import { useQuery } from '@tanstack/react-query'
import { TAKE_FAVORITE_COURSES_PATH, useApi } from '@/services'
const useGetFavoriteCourse = (pageNumber = 0, pageSize = 15, config = {}) => {
  const api = useApi()
  return useQuery(
    ['get-favorite-courses', pageNumber],
    async () => {
      if (!api) {
        return false
      }
      const { data } = await api.get(TAKE_FAVORITE_COURSES_PATH+`?page=${pageNumber}&pageSize=${pageSize}`)
      return data.data
    },
    {
      ...config,
    },
  )
}
export default useGetFavoriteCourse