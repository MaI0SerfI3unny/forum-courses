import React from 'react'
import { useAuth } from '@/services'
import { fieldsDefinition } from './signIn-definitions'
import { LoginForm } from '@/components'
import { Paper, Flex, Heading, Text, Box, NavLink } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { SIGN_UP } from '@/utils/routerPaths'

export default function SignIn() {
  const { signIn, isLoading } = useAuth()

  return (
    <Box width="45rem">
      <Paper pt="2.5rem" pb="3.75rem" px="5.25rem">
        <Flex variant="columnCenter" gap="md">
          <Heading variant="h1">
            <FormattedMessage id="login.form.sign_in_title" />
          </Heading>
          <Text variant="body14m" mb="lg">
            <FormattedMessage id="login.form.sign_in_sub_title" />{' '}
            <NavLink href={SIGN_UP} color="text.blueLight">
              <FormattedMessage id="login.form.sign_in_tu_sign_up_link" />
            </NavLink>
          </Text>

          <LoginForm
            fieldDefinition={fieldsDefinition}
            isLoading={isLoading}
            type="sign_in"
            onSubmit={signIn}
          />
        </Flex>
      </Paper>
    </Box>
  )
}
