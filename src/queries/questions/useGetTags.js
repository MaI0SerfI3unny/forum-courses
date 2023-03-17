import { useQuery } from '@tanstack/react-query'
import { GET_MY_QUESTIONS_TAGS_PATH, useApi } from '@/services'
import { useSnackbar } from '@/context'

const useGetTags = (config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  return useQuery(
    ['get-question-tags'],
    async () => {
      try {
        const { data } = await api.get(GET_MY_QUESTIONS_TAGS_PATH)
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

export default useGetTags
