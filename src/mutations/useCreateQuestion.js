import { useMutation } from '@tanstack/react-query'

import { QUESTION_CREATE_PATH, useApi, queryClient } from '@/services'
import { useSnackbar } from '@/context'

const useCreateQuestion = (config = {}) => {
  const api = useApi()
  const { onToast } = useSnackbar()

  return useMutation(
    async (values) => {
      try {
        const { data } = await api.post(QUESTION_CREATE_PATH, values)
        if (!data) {
          onToast('Something went wrong', 'error')
        }
        return data.data
      } catch (error) {
        onToast(error?.response?.data?.message, 'error')
        return false
      }
    },
    {
      onSuccess: (createdQuestion) => {
        if (!createdQuestion) {
          return
        }
        const updateCreatedQuestion = (oldState = []) => {
          return [...oldState, createdQuestion]
        }

        queryClient.setQueryData(['get-my-questions'], updateCreatedQuestion)
      },
      ...config,
    },
  )
}

export default useCreateQuestion
