import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function ArrowRight({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M14.7695 11.8079L10.3121 8.09346C9.79109 7.65924 9 8.02976 9 8.70803V15.292C9 15.9702 9.79109 16.3408 10.3121 15.9065L14.7695 12.1921C14.8895 12.0921 14.8895 11.9079 14.7695 11.8079Z"
      />
    </IconBase>
  )
}

export default ArrowRight

ArrowRight.propTypes = {
  color: PropTypes.string,
}
ArrowRight.defaultProps = {
  color: 'icon.grayDark',
}
