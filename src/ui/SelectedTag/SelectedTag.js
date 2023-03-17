import React from 'react'
import { Flex } from '@/ui'
import { Close } from '@/icons'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'

const SelectedTagStyled = styled(Flex)(
  css({
    py: 'xxs',
    px: 'xs',
    backgroundColor: 'bg.white',
    border: '1px solid',
    borderColor: 'border.stroke',
    borderRadius: '1',
    alignItems: 'center',
    transition: '0.2s',
    color: 'text.grayDark',
    zIndex: 1,
    textTransform: 'uppercase',
  }),
)

const SelectedTag = ({ title, id, onChangeSelected }) => {
  return (
    <SelectedTagStyled gap="xs">
      {title}
      <Close
        color="icon.grayLight"
        width={16}
        size={16}
        onClick={(event) => {
          event.stopPropagation()
          onChangeSelected(id)
        }}
      />
    </SelectedTagStyled>
  )
}

SelectedTag.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeSelected: PropTypes.func,
}

export default SelectedTag
