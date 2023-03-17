import { useQuery } from '@tanstack/react-query'

import { TAKE_USER_NOTIFICATION_MY, useApi } from '@/services'

const useGetMyNotifications = (config = {}) => {
  const api = useApi()

  return useQuery(
    ['get-my-notification'],
    async () => {
      if (!api) {
        return false
      }
      const { data } = await api.post(TAKE_USER_NOTIFICATION_MY)
      return data.data
    },
    {
      ...config,
    },
  )
}

export default useGetMyNotifications
