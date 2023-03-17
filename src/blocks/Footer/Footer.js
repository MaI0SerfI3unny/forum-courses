import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@/ui'
import css from '@styled-system/css'
import PrivacyNav from './PrivacyNav'
import { privacyMenu } from './nav-definitions'

export const FooterWrap = styled(Box)(() =>
  css({
    bg: 'bg.white',
    py: '0.375rem',
    px: 0,
  }),
)
export const FooterBox = styled(Box)(() =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '98.25rem',
    px: '1rem',
    mx: 'auto',
    gap: '1rem',
    '@media (max-width:576px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
)

const Footer = () => {
  return (
    <FooterWrap>
      <FooterBox>
        <Text variant="body12r">
          AskHow © Copyright {new Date().getFullYear()}. All Rights Reserved.
        </Text>
        <PrivacyNav pages={privacyMenu} />
      </FooterBox>
    </FooterWrap>
  )
}

export default Footer
