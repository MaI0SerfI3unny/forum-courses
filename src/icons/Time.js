import React from 'react'
import { IconBase, Path, Circle } from '@/components'
import PropTypes from 'prop-types'

function Time({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Circle stroke={color} cx="12" cy="12.0001" r="5.83333" />
      <Path
        stroke={color}
        d="M15 12.0001H12.25C12.1119 12.0001 12 11.8882 12 11.7501V9.66675"
        strokeLinecap="round"
      />
    </IconBase>
  )
}

export default Time

Time.propTypes = {
  color: PropTypes.string,
}
Time.defaultProps = {
  color: 'icon.grayDark',
}
