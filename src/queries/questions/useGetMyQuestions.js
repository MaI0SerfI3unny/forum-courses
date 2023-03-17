import { useQuery } from '@tanstack/react-query'

import { GET_MY_QUESTIONS_PATH, useApi } from '@/services'

const useGetMyQuestions = (config = {}) => {
  const api = useApi()

  return useQuery(
    ['get-my-questions'],
    async () => {
      if (!api) {
        return false
      }
      const { data } = await api.get(GET_MY_QUESTIONS_PATH)
      return data.data
    },
    {
      ...config,
    },
  )
}

export default useGetMyQuestions
