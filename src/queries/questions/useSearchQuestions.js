import { useSnackbar } from '@/context'
import { SEARCH_QUESTIONS_PATH, useApi } from '@/services'
import { useQuery } from '@tanstack/react-query'

const useSearchQuestions = (searchQuestion, config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  return useQuery(
    ['search-questions', searchQuestion],
    async () => {
      try {
        if (Object.keys(searchQuestion).length === 0) {
          onToast("Can't find anything", 'error')
          const { data: response } = await api.post(SEARCH_QUESTIONS_PATH, {
            tag: [],
            category: [],
            title: '',
          })
          return response.data
        } else {
          const { data: response } = await api.post(
            SEARCH_QUESTIONS_PATH,
            searchQuestion,
          )
          return response.data
        }
      } catch (error) {
        onToast(error?.response?.data?.message, 'error')
        console.error(error)
      }
    },
    { ...config },
  )
}

export default useSearchQuestions
