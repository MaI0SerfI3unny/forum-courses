import { ProfileNotificationsItems } from '@/blocks'
import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout'
import { Flex, Box, Heading } from '@/ui'
import { FormattedMessage } from 'react-intl'

export default function Notifications() {
  return (
    <ProfileLayout>
      <Box>
        <Heading variant="h2" mt="0.375rem">
          <FormattedMessage id="notifications" />
        </Heading>
        <Flex flexDirection="column" gap="0.438rem" mt="2rem">
          <ProfileNotificationsItems />
        </Flex>
      </Box>
    </ProfileLayout>
  )
}
