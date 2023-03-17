import { profileSettingTabsDefinitions } from './profile_settings_tabs-definitions'
import { ProfileTabs } from '@/components'

const ProfileSettingsTabs = () => {
  return (
    <ProfileTabs
      definitions={profileSettingTabsDefinitions}
      parentUrl="settings"
    />
  )
}
export default ProfileSettingsTabs
