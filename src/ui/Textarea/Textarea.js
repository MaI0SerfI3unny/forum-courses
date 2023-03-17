import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  space,
  border,
  layout,
  position,
  compose,
  variant,
} from 'styled-system'

import { variants as textVariants } from '../Text'

const styleProps = compose(color, space, border, layout, position)

const Textarea = styled.textarea(
  css({
    boxSizing: 'border-box',
    outline: 'none',
    border: '1px solid',
    borderColor: 'border.stroke',
    resize: 'none',
    width: '100%',
    minHeight: '6.688rem',
    py: 'sm',
    px: 'md',
    borderRadius: 2,
    backgroundColor: 'bg.white',
    '::placeholder': {
      color: 'text.grayMedium',
    },
  }),
  styleProps,

  variant({
    prop: 'textVariant',
    variants: textVariants,
  }),
  ({ sx }) => sx,
)
Textarea.defaultProps = {
  textVariant: 'body14m',
}

export default Textarea
