import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  typography,
  compose,
} from 'styled-system'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import { Box } from '@/ui'
import { Search } from '@/icons'
import { FormikInput } from '@/components'

const styleProps = compose(color, space, border, layout, typography)

const InputWrapper = styled(Box)(
  css({
    py: 0,
    pl: 0,
    pr: 'md',
    gap: '0.625rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '@media (max-width:1400px)': {
      flexDirection: 'row-reverse',
      pr: '0',
    },
  }),
  styleProps,
  ({ sx }) => sx,
)

const InputBase = styled(FormikInput)(
  css(
    {
      flexGrow: 1,
      padding: 0,
      boxSizing: 'border-box',
      background: 'transparent',
      outline: 'none',
      border: 'none',
      width: '100%',
      fontFamily: 'Poppins, sans-serif',
      fontSize: 'xxs',
      fontWeight: 'light',
      lineHeight: 'sm',
      color: 'text.dark',
      '::placeholder': {
        color: 'text.grayDark',
      },
    },
    styleProps,
    ({ sx }) => sx,
  ),
)
const SearchInput = ({
  type,
  sx,
  inputSx,
  maxWidth,
  ref,
  isBorderAppear,
  onClick,
  ...props
}) => {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }
  useImperativeHandle(ref, () => inputRef?.current)

  return (
    <InputWrapper onClick={focusInput} maxWidth={maxWidth} sx={sx}>
      <Search width={24} color="icon.dark" onClick={onClick} />
      <InputBase
        width={maxWidth}
        ref={inputRef}
        type={type}
        sx={inputSx}
        isBorderAppear={isBorderAppear}
        {...props}
      />
    </InputWrapper>
  )
}
SearchInput.propTypes = {
  as: PropTypes.node,
  sx: PropTypes.object,
  inputSx: PropTypes.object,
  type: PropTypes.string,
  maxWidth: PropTypes.string,
  ref: PropTypes.object,
  isBorderAppear: PropTypes.bool,
  onClick: PropTypes.func,
}

export default forwardRef(function InputWrapper(props, ref) {
  return SearchInput({ ref, ...props })
})
