import React from 'react'
import styled from 'styled-components'
import { Box } from '@/ui'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import arrow from '@/assets/Arrow_right.png'

export const variants = {
  primary: {
    p: {
      color: 'text.dark',
    },
  },
}

const TextHtmlStyled = styled(Box)(
  css({
    p: {
      marginTop: 0,
      marginBottom: 'lg',
      lineHeight: 'md',
      fontWeight: 'normal',
      fontSize: 'sm',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    h3: {
      marginTop: 0,
      marginBottom: 'lg',
      color: 'text.dark',
      lineHeight: 'lg',
      fontWeight: 'bold',
      fontSize: '1.125rem',
    },
    ul: {
      margin: 0,
      marginBottom: '2.125rem',
      padding: 0,
      fontWeight: 'normal',
      fontSize: 'sm',
      lineHeight: 'md',
      color: 'text.dark',
      '&:last-child': {
        marginBottom: 0,
      },
      listStyle: 'none',
      li: {
        background: `url(${arrow.src}) -6px -3px no-repeat`,
        paddingLeft: '21px',
        marginBottom: 'sm',
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
  }),
  variant({
    variants,
  }),
)

TextHtmlStyled.defaultProps = {
  variant: 'primary',
}

export default function TextHtml({ text, ...props }) {
  return (
    <TextHtmlStyled dangerouslySetInnerHTML={{ __html: text }} {...props} />
  )
}

TextHtml.propTypes = {
  text: PropTypes.string,
}
