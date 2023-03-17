import { useQuery } from '@tanstack/react-query'

import { GET_USER_PATH, useApi } from '@/services'
import { useCookies } from 'react-cookie'

const useGetUser = (config = {}) => {
  const [, , removeCookie] = useCookies([])
  const api = useApi()

  return useQuery(
    ['get-user'],
    async () => {
      if (!api) {
        return false
      }
      try {
        const { data } = await api.get(GET_USER_PATH)
        return data.data
      } catch (error) {
        if (error.response.status === 401) {
          removeCookie('accessToken')
        }
        return false
      }
    },
    {
      ...config,
    },
  )
}

export default useGetUser
