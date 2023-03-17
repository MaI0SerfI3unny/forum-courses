import React from 'react'
import { Flex, Paper, Heading, Divider } from '@/ui'
import { Comments } from '@/components'
import { PostComment } from '@/blocks'
import { FormattedMessage } from 'react-intl'

const CommentRegistration = (props) => {
  return (
    <Paper p="xl" radius="r1">
      <Flex gap="xl" justifyContent="space-between">
        <Flex flexDirection="column" gap="xl">
          <Heading variant="h3sb">
            <FormattedMessage id="comments" />
          </Heading>
          <Comments {...props} />
        </Flex>
        <Divider />
        <PostComment minWidth="23.125rem" />
      </Flex>
    </Paper>
  )
}

export default CommentRegistration
