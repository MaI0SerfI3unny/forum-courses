import { useAuth } from '@/services'
import { useRouter } from 'next/router'

export default function Logout() {
  const { signOut } = useAuth()
  signOut()
  const { push } = useRouter()
  push('/')
}
