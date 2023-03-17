import { Flex, NavLink, TabSubject } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const ProfileTabs = ({ definitions, parentUrl }) => {
  const router = useRouter()
  const { asPath } = router
  const types = definitions.map(({ id, title, url }) => {
    return (
      <Flex key={id}>
        <NavLink href={`/profile/${parentUrl}/${url}`}>
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
export default ProfileTabs

ProfileTabs.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.object),
  parentUrl: PropTypes.string,
}
