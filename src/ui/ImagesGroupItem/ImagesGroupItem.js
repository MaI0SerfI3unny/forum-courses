import React from 'react'
import PropTypes from 'prop-types'
import { Box, UserAvatar } from '@/ui'
import styled from 'styled-components'
import css from '@styled-system/css'

export const UserAvatarWrap = styled(Box)(
  css({
    position: 'relative',
    ':not(:first-child)': {
      marginLeft: '-12px',
    },
  }),
)

export default function ImagesGroupItem({ image }) {
  return (
    <UserAvatarWrap>
      <UserAvatar variant="primary" src={image} width={24} height={24} />
    </UserAvatarWrap>
  )
}

ImagesGroupItem.propTypes = {
  image: PropTypes.any,
}
