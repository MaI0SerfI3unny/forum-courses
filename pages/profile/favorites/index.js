import FavoritesType from './[type]'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Favorites() {
  const router = useRouter()
  useEffect(() => {
    router.push('/profile/favorites/subjects')
  }, [router])
  return <FavoritesType />
}
