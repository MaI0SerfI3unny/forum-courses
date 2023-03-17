import { useQuery } from '@tanstack/react-query'
import { GET_QUESTIONS_PATH, useApi } from '@/services'
import { useSnackbar } from '@/context'

const useGetQuestions = (config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  return useQuery(
    ['get-questions'],
    async () => {
      try {
        const { data } = await api.get(GET_QUESTIONS_PATH)
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

export default useGetQuestions
