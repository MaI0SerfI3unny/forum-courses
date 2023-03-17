import React from 'react'
import { useAuth } from '@/services'
import { fieldsDefinition } from './signUp-definitions'
import { LoginForm } from '@/components'
import { Paper, Flex, Heading, Text, Box, NavLink } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { SIGN_IN } from '@/utils/routerPaths'

export default function SignIn() {
  const { signUp, isLoading } = useAuth()

  return (
    <Box width="45rem">
      <Paper pt="2.5rem" pb="3.75rem" px="5.25rem">
        <Flex variant="columnCenter" gap="md">
          <Heading variant="h1">
            <FormattedMessage id="login.form.sign_up_title" />
          </Heading>
          <Text variant="body14m" mb="lg">
            <FormattedMessage id="login.form.sign_up_sub_title" />{' '}
            <NavLink href={SIGN_IN} color="text.blueLight">
              <FormattedMessage id="login.form.sign_up_tu_sign_up_link" />
            </NavLink>
          </Text>

          <LoginForm
            fieldDefinition={fieldsDefinition}
            isLoading={isLoading}
            type="sign_up"
            onSubmit={signUp}
          />
        </Flex>
      </Paper>
    </Box>
  )
}
