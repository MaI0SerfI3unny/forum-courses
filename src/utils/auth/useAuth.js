import { useRouter } from 'next/router'
import { api } from '@/utils'
import { useUser } from '@/context'
import { AFTER_LOGOUT, AFTER_SIGN_IN, AFTER_SIGN_UP } from '../routerPaths'

export default function useAuth() {
  const router = useRouter()
  const { clearUser, updateUser } = useUser()

  const csrf = () => api.get('/sanctum/csrf-cookie')

  const signIn = async ({ ...props }) => {
    await csrf()
    api
      .post('/login', props)
      .then(() => {
        updateUser() && router.push(AFTER_SIGN_IN)
      })
      .catch((e) => {
        // add error toast
        console.log(e)
      })
  }

  const signUp = async ({ ...props }) => {
    await csrf()
    api
      .post('/register', props)
      .then(() => {
        updateUser() && router.push(AFTER_SIGN_UP)
      })
      .catch((e) => {
        // add error toast
        console.log(e)
      })
  }

  const signOut = async () => {
    await api.post('/logout')
    clearUser()
    router.push(AFTER_LOGOUT)
  }

  return {
    csrf,
    signIn,
    signUp,
    signOut,
  }
}
