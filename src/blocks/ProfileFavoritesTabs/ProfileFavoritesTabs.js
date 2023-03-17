import { favoritesTabsDefinitions } from './favorites_tabs-definitions'
import { Flex, NavLink, TabSubject, Text } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const ProfileFavoritesTabs = ({ subjectsLength, coursesLength }) => {
  const router = useRouter()
  const { asPath } = router
  const types = favoritesTabsDefinitions.map(({ id, title, url }) => {
    return (
      <Flex key={id}>
        <NavLink href={`/profile/favorites/${url}`}>
          <TabSubject
            key={id}
            isActive={asPath.includes(url)}
            label={<FormattedMessage id={title} />}
          />
        </NavLink>
        <Text color="text.grayDark">
          {title === 'subjects' ? subjectsLength : coursesLength}
        </Text>
      </Flex>
    )
  })
  return (
    <Flex mt="1.5rem" gap="3.5rem">
      {types}
    </Flex>
  )
}

export default ProfileFavoritesTabs

ProfileFavoritesTabs.propTypes = {
  subjectsLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  coursesLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
