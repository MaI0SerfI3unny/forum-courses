import React from 'react'
import { Flex, IconButton } from '@/ui'
import PropTypes from 'prop-types'
import { LineOne, LineTwo, LineThree } from './BurgerButton.styled'

export default function BurgerButton({ open, onClick }) {
  return (
    <IconButton onClick={onClick} zIndex="20" p="sm" position="relative">
      <Flex gap="xxs" flexDirection="column">
        <LineOne open={open} />
        <LineTwo open={open} />
        <LineThree open={open} />
      </Flex>
    </IconButton>
  )
}

BurgerButton.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
}
