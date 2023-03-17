import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Sort({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Path stroke={color} d="M5 7H19" strokeLinecap="round" />
      <Path stroke={color} d="M5 12H15" strokeLinecap="round" />
      <Path stroke={color} d="M5 17H11" strokeLinecap="round" />
    </IconBase>
  )
}

export default Sort

Sort.propTypes = {
  color: PropTypes.string,
}
Sort.defaultProps = {
  color: 'icon.grayDark',
}
