import QuestionLight from '@/icons/QuestionLight'
import FavoriteLight from '@/icons/FavoriteLight'
import UserBoxLight from '@/icons/UserBoxLight'
import BellLight from '@/icons/BellLight'
import SignOut from '@/icons/SignOut'
import {
  PROFILE_FAVORITES,
  PROFILE_MY_QUESTIONS,
  PROFILE_NOTIFICATIONS,
  PROFILE_SETTINGS,
} from '@/utils/routerPaths'

export const profileSidebar = [
  { title: 'My Questions', Icon: QuestionLight, url: PROFILE_MY_QUESTIONS },
  {
    title: 'Favorites',
    Icon: FavoriteLight,
    url: PROFILE_FAVORITES,
  },
  { title: 'Profile Settings', Icon: UserBoxLight, url: PROFILE_SETTINGS },
  { title: 'Notifications', Icon: BellLight, url: PROFILE_NOTIFICATIONS },
  { title: 'Logout', Icon: SignOut, url: '/profile/logout' },
]
