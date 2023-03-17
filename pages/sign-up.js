import React, { useEffect } from 'react'
import { SignUp } from '@/blocks'
import { useRouter } from 'next/router'
import { useUser } from '@/context'
import { LoginLayout } from '@/layouts'
import { Flex, Heading } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { PROFILE_MY_QUESTIONS } from '@/utils/routerPaths'

export default function SignUpPage() {
  const { isLoggedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push(PROFILE_MY_QUESTIONS)
    }
  }, [isLoggedIn, router])
  return (
    <LoginLayout>
      <Flex variant="column" gap="3rem" flexGrow="1">
        <Heading variant="h1" color="text.blue">
          <FormattedMessage id="login.sig_up_welcome_text" />
        </Heading>

        <Heading variant="h1" as="h2" color="text.dark">
          <FormattedMessage id="login.sign_in_page_text" />
        </Heading>
      </Flex>
      <SignUp />
    </LoginLayout>
  )
}
