import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Plus({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Path
        stroke={color}
        d="M12 6L12 18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        stroke={color}
        d="M18 12L6 12"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IconBase>
  )
}

export default Plus

Plus.propTypes = {
  color: PropTypes.string,
}
Plus.defaultProps = {
  color: 'icon.grayDark',
}
