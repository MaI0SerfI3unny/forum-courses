import { Flex,Spinner } from '@/ui'
import { ProfileNotificationsItem } from '@/components'
import { useGetMyNotifications } from '@/queries/notifications'

const ProfileNotificationsItems = () => {
  const { data: myNotificationData, isLoading } = useGetMyNotifications()
  
  const notifications = myNotificationData?.map(
    ({ id, message, typeRead, typeReadBool,specialId,type }) => {
      return (
          <ProfileNotificationsItem
          key={id}
          id={id}
          message={message}
          typeRead={typeRead}
          specialId={specialId}
          typeReadBool={!typeReadBool}
          type={type}
        />
      )
    },
  )
  return (
    <Flex flexDirection="column" gap="xs">
      {!isLoading ? notifications : <Spinner/> }
    </Flex>
  )
}

export default ProfileNotificationsItems
