import { useQuery } from '@tanstack/react-query'
import { GET_MY_QUESTIONS_CATEGORIES_PATH, useApi } from '@/services'
import { useSnackbar } from '@/context'

const useGetCategories = (config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  return useQuery(
    ['get-question-categories'],
    async () => {
      try {
        const { data } = await api.get(GET_MY_QUESTIONS_CATEGORIES_PATH)
        return data.data
      } catch (error) {
        onToast(error?.response?.data?.message, 'error')
        console.error(error)
      }
    },
    {
      ...config,
    },
  )
}

export default useGetCategories
