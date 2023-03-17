import { createContext, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useGetUser } from '@/queries'
import { useCookies } from 'react-cookie'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [cookies] = useCookies(['accessToken'])

  const { data, isLoading: isLoadingData, refetch } = useGetUser()

  useEffect(() => {
    refetch()
  }, [cookies.accessToken, refetch])

  const isLoading =
    (isLoadingData && !!cookies.accessToken) || typeof window === 'undefined'

  const userValues = useMemo(() => {
    return {
      isLoggedIn: !!data,
      userData: data,
      isLoading,
    }
  }, [data, isLoading])

  return (
    <AuthContext.Provider value={userValues}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any,
}

export function useUser() {
  return useContext(AuthContext)
}
