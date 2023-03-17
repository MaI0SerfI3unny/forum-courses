import React from 'react'
import { IconBase, Path, Circle } from '@/components'
import PropTypes from 'prop-types'

function Search({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Circle cx="11" cy="11" r="6" stroke={color} />
      <Path stroke={color} d="M20 20L17 17" strokeLinecap="round" />
    </IconBase>
  )
}

export default Search

Search.propTypes = {
  color: PropTypes.string,
}
Search.defaultProps = {
  color: 'icon.grayDark',
}
