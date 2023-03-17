import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Close({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z"
      />
    </IconBase>
  )
}

Close.propTypes = {
  color: PropTypes.string,
}
Close.defaultProps = {
  color: 'icon.grayDark',
}

export default Close