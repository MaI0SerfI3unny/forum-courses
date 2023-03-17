import { useSnackbar } from '@/context'
import { useApi, CHANGE_USER_PASSWORD } from '@/services'
import { useMutation } from '@tanstack/react-query'

const useChangeUserPassword = (config = {}) => {
  const api = useApi()
  const { onToast } = useSnackbar()

  return useMutation(async (values) => {
    try {
      const { data } = await api.post(CHANGE_USER_PASSWORD, values)
      if (!data) {
        onToast('Something went wrong', 'error')
      }
      return data.message
    } catch (error) {
      onToast(error?.response?.data?.message, 'error')
      return false
    }
  }, config)
}

export default useChangeUserPassword
