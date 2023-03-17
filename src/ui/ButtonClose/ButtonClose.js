import React from 'react'
import { IconButton } from '@/ui'
import { Close, CloseBg } from '@/icons'
import PropTypes from 'prop-types'

const icons = {
  default: Close,
  closeBg: CloseBg,
}

const ButtonClose = ({ color, variant, ...props }) => {
  const CloseIcon = icons[variant]

  return (
    <IconButton {...props}>
      <CloseIcon color={color} />
    </IconButton>
  )
}
ButtonClose.defaultProps = {
  variant: 'default',
}

ButtonClose.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
}

export default ButtonClose
