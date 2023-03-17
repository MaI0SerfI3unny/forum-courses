import React from 'react'
import PropTypes from 'prop-types'
import { TextWrapper } from './LastBlockInGroup.styled'
import { Text } from '@/ui'

export default function LastBlockInGroup({ restImages, onClick, ...props }) {
  return (
    <TextWrapper onClick={onClick} {...props}>
      <Text variant="body12m">{restImages}+</Text>
    </TextWrapper>
  )
}

LastBlockInGroup.propTypes = {
  restImages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
}
