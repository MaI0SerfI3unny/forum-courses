import React from 'react'
import styled from 'styled-components'
import * as icons from './index'
import PropType from 'prop-types'
import { Box } from '@/ui'

const iconsArray = []

for (let icon in icons) {
  iconsArray.push({
    El: icons[icon],
    name: icon,
  })
}
const IconsContainer = styled(Box).attrs({
  bg: 'bg.primary',
})`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const IconsBlock = styled(Box)`
  display: grid;
  padding: 20px 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
`
const IconWrapper = styled(Box)`
  border: solid 1px #c4bcbc;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IconTitle = styled(Box)`
  max-width: 90px;
  margin-left: -10px;
  margin-right: -10px;
  text-align: center;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.colors.text.primary};
`

export default function Icons({ size, color }) {
  return (
    <IconsContainer>
      <IconsBlock>
        {iconsArray.map((Icon, key) => (
          <IconWrapper key={key}>
            <IconTitle>{Icon.name}</IconTitle>
            <Icon.El height={size} width={size} color={color} />
          </IconWrapper>
        ))}
      </IconsBlock>
    </IconsContainer>
  )
}

Icons.propTypes = {
  size: PropType.number,
  color: PropType.string,
}
