import { Flex, NavLink, UserAvatar } from '@/ui'
import {
  PROFILE_FAVORITES,
  PROFILE_NOTIFICATIONS,
  PROFILE_MY_QUESTIONS,
} from '@/utils/routerPaths'
import { BellLight, FavoriteLight } from '@/icons'
import { useUser } from '@/context'

const UserHeaderInfoBox = ({ bg }) => {
  const { userData } = useUser()
  return (
    <Flex justifyContent="space-between" width="9.813rem" alignItems="center">
      <NavLink href={PROFILE_NOTIFICATIONS}>
        <BellLight size="24" color="icon.dark" />
      </NavLink>
      <NavLink href={PROFILE_FAVORITES}>
        <FavoriteLight size="24" color="icon.dark" />
      </NavLink>
      <NavLink href={PROFILE_MY_QUESTIONS}>
        <UserAvatar name={userData?.name} avatar={userData?.avatar} bg={bg} />
      </NavLink>
    </Flex>
  )
}

export default UserHeaderInfoBox
