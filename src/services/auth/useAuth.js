import { useApi } from '@/services'
import { LOGIN_PATH, SIGN_UP_PATH } from '@/services/endpoints'
import { useCookies } from 'react-cookie'
import { useSnackbar } from '@/context'
import { useState } from 'react'

export default function useAuth() {
  const [, setCookie, removeCookie] = useCookies(['accessToken'])
  const [isLoading, setIsLoading] = useState(false)
  const api = useApi({ withAuth: false })
  const { onToast } = useSnackbar()

  const signIn = async (body) => {
    setIsLoading(true)
    try {
      const { data } = await api.post(LOGIN_PATH, body)
      let messageType = 'error'
      if (data.status === 200) {
        setCookie('accessToken', data.data, { path: '/' })
        messageType = 'success'
      }
      onToast(data.message, messageType)
    } catch (error) {
      onToast(error.response?.data?.message, 'error')
      console.error(error)
    }
    setIsLoading(false)
  }

  const signUp = async (body) => {
    setIsLoading(true)
    try {
      const { data } = await api.post(SIGN_UP_PATH, body)
      let messageType = 'error'
      if (data.status === 200) {
        messageType = 'success'
      }
      onToast(data.message, messageType)
    } catch (error) {
      onToast(error.response?.data?.message, 'error')
      console.error(error)
    }
    setIsLoading(false)
  }

  const signOut = async () => {
    removeCookie('accessToken', { path: '/' })
  }

  return {
    signIn,
    signUp,
    signOut,
    isLoading,
  }
}
