import React from 'react'
import { IconBase, Path, Rect } from '@/components'
import PropTypes from 'prop-types'

function Windows({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Rect width="16" height="16" rx="4" fill="#E0E0E0" />
      <Path
        fill={color}
        d="M8.25856 3.82454V7.58773H13.2345V3L8.25856 3.82454ZM8.25856 12.1898L13.2345 13V8.41488H8.25856V12.1898ZM3 7.58643H7.20607V3.96131L3 4.6582V7.58643ZM3 11.3692L7.20607 12.0543V8.41488H3V11.3692Z"
      />
    </IconBase>
  )
}

export default Windows

Windows.propTypes = {
  color: PropTypes.string,
}
Windows.defaultProps = {
  color: 'icon.grayDark',
}
