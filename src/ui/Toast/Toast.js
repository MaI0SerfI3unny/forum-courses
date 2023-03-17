import React from 'react'
import { Flex, Text, Paper, ButtonClose } from '@/ui'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSnackbar } from '@/context'
import {
  color,
  space,
  border,
  compose,
  variant,
  typography,
  flexbox,
  system,
} from 'styled-system'

const styleProps = compose(color, space, border, typography, flexbox, system)

const variants = {
  success: {
    bg: 'bg.greenLight',
  },
  error: {
    bg: 'bg.redLight',
  },
  info: {
    bg: 'bg.stroke',
  },
}

const ToastBlock = styled(Paper)(
  variant({
    variants,
  }),

  styleProps,
  ({ sx }) => sx,
)

const variantPropTypes = PropTypes.oneOf(['success', 'error', 'info'])

const Toast = ({ message, variant, id }) => {
  const { onRemove } = useSnackbar()

  const onClose = (id) => {
    onRemove(id)
  }

  return (
    <ToastBlock shadow="tooltip" variant={variant} px="sm" py="sm">
      <Flex alignItems="center" justifyContent="space-between" gap="0.625rem">
        <Text variant="body12r" color="text.dark">
          {message}
        </Text>
        <ButtonClose
          color="icon.white"
          position="inherit"
          onClick={() => onClose(id)}
          size="md"
        />
      </Flex>
    </ToastBlock>
  )
}

Toast.propTypes = {
  variant: PropTypes.oneOfType([
    variantPropTypes,
    PropTypes.arrayOf(variantPropTypes),
  ]).isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.number,
}

Toast.defaultProps = {
  variant: 'info',
}

export default Toast
