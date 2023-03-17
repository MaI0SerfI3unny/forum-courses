import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Back({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M4 12L3.64645 11.6464L3.29289 12L3.64645 12.3536L4 12ZM19 12.5C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5V12.5ZM9.64645 5.64645L3.64645 11.6464L4.35355 12.3536L10.3536 6.35355L9.64645 5.64645ZM3.64645 12.3536L9.64645 18.3536L10.3536 17.6464L4.35355 11.6464L3.64645 12.3536ZM4 12.5H19V11.5H4V12.5Z"
      />
    </IconBase>
  )
}

export default Back

Back.propTypes = {
  color: PropTypes.string,
}
Back.defaultProps = {
  color: 'icon.grayDark',
}
