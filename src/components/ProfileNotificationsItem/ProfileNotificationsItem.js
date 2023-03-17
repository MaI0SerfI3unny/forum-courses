import { NavLink, Paper, Text } from '@/ui'
import PropTypes from 'prop-types'

const ProfileNotificationsItem = ({  message, typeReadBool,specialId,type }) => {
  const getLinkType = (type) => {
    const typeLink = {
      comment: "/specific-courses/",
      answer: "/questions/"
    }
    return typeLink[type] + specialId
  }
  return (
    <NavLink href={getLinkType(type)}>
      <Paper p="1rem">
        <Text
          width="49.188rem"
          fontWeight={typeReadBool ? '600' : '500'}
          color={typeReadBool ? 'text.dark' : 'text.grayNormal'}
        >{message}</Text>
      </Paper>
    </NavLink>
  )
}

export default ProfileNotificationsItem

ProfileNotificationsItem.propTypes = {
  message: PropTypes.string,
  typeReadBool: PropTypes.bool,
  specialId: PropTypes.number,
  type: PropTypes.string
}
