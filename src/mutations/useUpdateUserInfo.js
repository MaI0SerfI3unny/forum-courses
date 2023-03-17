import { useSnackbar } from '@/context'
import { useApi, POST_USER_INFO_PATH, queryClient } from '@/services'
import { useMutation } from '@tanstack/react-query'

const useUpdateUserInfo = (config = {}) => {
  const api = useApi()
  const { onToast } = useSnackbar()

  return useMutation(
    async (values) => {
      try {
        const { data } = await api.post(POST_USER_INFO_PATH, values)
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
      onSuccess: (updatedUserInfo) => {
        if (!updatedUserInfo) {
          return
        }
        const updateUserInfo = (oldState = {}) => {
          return { ...oldState, updatedUserInfo }
        }

        queryClient.setQueryData(['get-user'], updateUserInfo)
      },
      ...config,
    },
  )
}

export default useUpdateUserInfo
