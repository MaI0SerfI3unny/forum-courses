import { queryClient } from '@/services'
import { useMutation } from '@tanstack/react-query'

const useSetRating = (config = {}) => {
  return useMutation(
    (values) => {
      try {
        const data = values
        if (!data) {
          return false
        }
        return data
      } catch (error) {
        return { error: true, errorMessage: error?.response?.data?.message }
      }
    },
    {
      onSuccess: (rating) => {
        const updateRating = (oldState) => {
          return { ...oldState, rating }
        }
        queryClient.setQueryData(['rating'], updateRating)
      },
      ...config,
    },
  )
}

export default useSetRating
