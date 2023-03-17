import { NavLink, Text } from '@/ui'
import { FIND_QUESTION } from '@/utils/routerPaths'
import PropTypes from 'prop-types'

const CreatedQuestionToastLink = ({ title, id }) => {
  return (
    <NavLink href={FIND_QUESTION.replace(':id', id)}>
      <Text as="span">Your question successfully added {title}</Text>
    </NavLink>
  )
}

export default CreatedQuestionToastLink

CreatedQuestionToastLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
