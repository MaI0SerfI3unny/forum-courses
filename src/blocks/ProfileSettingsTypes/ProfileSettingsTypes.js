import { Flex, NavLink, TabSubject } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { profileSettingTypes } from './profile_settings_types-definitions'

const ProfileSettingTypes = () => {
  const router = useRouter()
  const { asPath } = router
  const types = profileSettingTypes.map(({ id, title, url }) => {
    return (
      <Flex key={id}>
        <NavLink href={`/profile/settings/${url}`}>
          <TabSubject
            isActive={asPath.includes(url)}
            label={<FormattedMessage id={title} />}
          />
        </NavLink>
      </Flex>
    )
  })
  return (
    <Flex mt="1.5rem" gap="3.5rem">
      {types}
    </Flex>
  )
}
export default ProfileSettingTypes

ProfileSettingTypes.propTypes = {
  subjectsLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  coursesLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
