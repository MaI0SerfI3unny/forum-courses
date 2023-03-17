import { Box, Flex, NavLink, Text } from '@/ui'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { profileSidebar } from './profile_sidebar-definitions'

const ProfileSidebarItems = () => {
  const router = useRouter()
  const { asPath } = router

  const items = profileSidebar.map(({ Icon, title, url }, idx) => {
    return (
      <NavLink href={url} key={idx}>
        <Flex
          gap="xs"
          pl="1.313rem"
          width="12.875rem"
          py="0.75rem"
          cursor="pointer"
          alignItems="center"
          borderRadius="0.25rem"
          backgroundColor={asPath.includes(url) && 'bg.white'}
        >
          {Icon && <Icon size="18" color="icon.lightPurple" />}
          <Text>{title}</Text>
        </Flex>
      </NavLink>
    )
  })
  return <Box>{items}</Box>
}

export default ProfileSidebarItems

ProfileSidebarItems.propTypes = {
  profileSidebar: PropTypes.arrayOf(PropTypes.object),
}
