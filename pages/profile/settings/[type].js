import {
  ProfileNotificationSettings,
  ProfilePersonalInformation,
  ProfileSecurity,
  ProfileSettingsTabs,
} from '@/blocks'
import { ProfileLayout } from '@/layouts'
import { Flex, Heading, Box } from '@/ui'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

const settingsBlocks = {
  security: ProfileSecurity,
  'personal-information': ProfilePersonalInformation,
  'notification-settings': ProfileNotificationSettings,
}

export default function Settings() {
  const router = useRouter()
  const { type } = router.query

  const SettingsBlock = settingsBlocks[type] ?? ProfilePersonalInformation

  return (
    <ProfileLayout>
      <Box>
        <Heading variant="h2" mt="0.375rem">
          <FormattedMessage id="profile_settings" />
        </Heading>
        <Flex flexDirection="column" gap="0.438rem">
          <ProfileSettingsTabs />
          <Flex gap="xs" flexDirection="column" mt="1.125rem">
            <SettingsBlock />
          </Flex>
        </Flex>
      </Box>
    </ProfileLayout>
  )
}
