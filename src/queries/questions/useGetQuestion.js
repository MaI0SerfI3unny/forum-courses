import { useQuery } from '@tanstack/react-query'
import { GET_QUESTION_PATH, useApi } from '@/services'
import { useSnackbar } from '@/context'

const useGetQuestion = (id, config = {}) => {
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()
  return useQuery(
    ['get-question', id],
    async () => {
      try {
        const { data } = await api.get(GET_QUESTION_PATH.replace(':id', id))
        return data.data
      } catch (error) {
        onToast(error?.response?.data?.message, 'error')
        console.error(error)
      }
    },
    { ...config },
  )
}

export default useGetQuestion
