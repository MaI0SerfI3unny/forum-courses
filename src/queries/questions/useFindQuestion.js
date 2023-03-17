import { useQuery } from '@tanstack/react-query'
import { FIND_QUESTION_PATH, useApi } from '@/services'
import { useSnackbar } from '@/context'

const useFindQuestions = (searchWord, config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  return useQuery(
    ['find-questions', searchWord],
    async () => {
      try {
        const { data: response } = await api.post(FIND_QUESTION_PATH, {
          title: searchWord,
        })
        return response.data
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

export default useFindQuestions
