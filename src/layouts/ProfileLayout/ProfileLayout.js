import { Header, Footer } from '@/blocks'
import PropTypes from 'prop-types'
import { Flex, Grid, MainContainer, Spinner } from '@/ui'
import { ProfileSidebar } from '@/components'
import { useUser } from '@/context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SIGN_IN } from '@/utils/routerPaths'

export default function ProfileLayout({ children }) {
  const router = useRouter()
  const { isLoggedIn, isLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push(SIGN_IN)
    }
  }, [isLoggedIn, isLoading, router])

  return (
    <>
      <Header isScrolling={true} />
      <MainContainer flexDirection="column" justifyContent="flex-start">
        {isLoading || !isLoggedIn ? (
          <Flex variant="center" width="100%" flexGrow={1}>
            <Spinner size={80} />
          </Flex>
        ) : (
          <Grid
            gridTemplateColumns="1fr 5fr"
            gridTemplateRows="1fr"
            gap="4rem"
            mt="2.5rem"
          >
            <ProfileSidebar />
            {children}
          </Grid>
        )}
      </MainContainer>
      <Footer />
    </>
  )
}

ProfileLayout.propTypes = {
  children: PropTypes.any,
}
