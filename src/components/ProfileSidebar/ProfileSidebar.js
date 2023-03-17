import PropTypes from 'prop-types'
import { ProfileSidebarItems } from '@/blocks'

const ProfileSidebar = () => {
  return <ProfileSidebarItems />
}

ProfileSidebar.propTypes = {
  sidebarItems: PropTypes.arrayOf(PropTypes.object),
}

export default ProfileSidebar
