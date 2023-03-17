import React from 'react'
import { IconBase, Path, Circle } from '@/components'
import PropTypes from 'prop-types'

function Video({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Path
        fill={color}
        d="M7.2936 5.08774L10.4348 6.65832L9.98754 7.55274L6.84638 5.98217L7.2936 5.08774ZM10.4348 9.3416L7.2936 10.9122L6.84639 10.0177L9.98754 8.44717L10.4348 9.3416ZM5.83333 6.60827V9.39165H4.83333V6.60827H5.83333ZM7.2936 10.9122C6.16327 11.4773 4.83333 10.6554 4.83333 9.39165H5.83333C5.83333 9.91202 6.38095 10.2505 6.84639 10.0177L7.2936 10.9122ZM10.4348 6.65832C11.5403 7.2111 11.5403 8.78881 10.4348 9.3416L9.98754 8.44717C10.3561 8.26291 10.3561 7.73701 9.98754 7.55274L10.4348 6.65832ZM6.84638 5.98217C6.38095 5.74945 5.83333 6.0879 5.83333 6.60827H4.83333C4.83333 5.34452 6.16327 4.52257 7.2936 5.08774L6.84638 5.98217Z"
      />
      <Circle cx="8" cy="8" r="6" stroke={color} />
    </IconBase>
  )
}

export default Video

Video.propTypes = {
  color: PropTypes.string,
}
Video.defaultProps = {
  color: 'icon.grayDark',
}
