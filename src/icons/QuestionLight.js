import { IconBase, Path, Circle } from '@/components'
import PropTypes from 'prop-types'

function QuestionLight({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 18 18" {...props}>
      <Circle cx="9" cy="9" r="6.75" stroke={color} />
      <Circle cx="9" cy="13.5" r="0.375" fill={color} />
      <Path
        d="M9 12V11.3574C9 10.8218 9.26771 10.3215 9.71341 10.0244L10.1623 9.72516C10.8418 9.27212 11.25 8.50943 11.25 7.6927V7.5C11.25 6.25736 10.2426 5.25 9 5.25V5.25C7.75736 5.25 6.75 6.25736 6.75 7.5V7.5"
        stroke={color}
      />
    </IconBase>
  )
}

export default QuestionLight

QuestionLight.propTypes = {
  color: PropTypes.string,
}
QuestionLight.defaultProps = {
  color: 'icon.lightPurple',
}
