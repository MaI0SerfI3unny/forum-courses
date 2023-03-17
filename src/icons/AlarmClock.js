import React from 'react'
import { IconBase, Path, Circle } from '@/components'
import PropTypes from 'prop-types'

function AlarmClock({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Circle cx="8.00001" cy="8.66667" r="4.66667" stroke={color} />
      <Path
        stroke={color}
        d="M3.33333 3.33337L2 4.66671"
        strokeLinecap="round"
      />
      <Path
        stroke={color}
        d="M12.6667 3.33337L14 4.66671"
        strokeLinecap="round"
      />
      <Path
        stroke={color}
        d="M6 7.33333L7.80929 8.53953C7.91719 8.61146 8.06217 8.58895 8.14318 8.48769L9.33333 7"
        strokeLinecap="round"
      />
    </IconBase>
  )
}

export default AlarmClock

AlarmClock.propTypes = {
  color: PropTypes.string,
}
AlarmClock.defaultProps = {
  color: 'icon.grayDark',
}
