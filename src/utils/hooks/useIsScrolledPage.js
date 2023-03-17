import { useState, useEffect, useCallback } from 'react'

const useIsScrolledPage = (params) => {
  const [isScrolling, setIsScrolling] = useState(false)

  const listenToScroll = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const shouldScroll = params?.shouldScroll ?? 0
    const minAdditionalHeight = params?.minAdditionalHeight ?? 0
    const windowHeight = window.innerHeight
    const bodyHeight = document.body.getBoundingClientRect().height

    setIsScrolling((oldValue) => {
      if (winScroll > shouldScroll) {
        if (!oldValue && minAdditionalHeight + windowHeight < bodyHeight) {
          return true
        } else if (oldValue) {
          return true
        }
        return false
      } else {
        return false
      }
    })
  }, [params])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [listenToScroll])

  return isScrolling
}

export default useIsScrolledPage
