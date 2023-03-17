import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@/ui'
import { InputWrapper, InputBase, InputBackground } from './Input.styled'

const Input = ({
  width,
  onChange,
  value,
  error,
  ref,
  isBorderAppear,
  ...props
}) => {
  const inputRef = useRef(null)
  const focusInput = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => inputRef.current)
  return (
    <Box width={width}>
      <InputWrapper width={width} onClick={focusInput}>
        <InputBase
          value={value}
          onChange={onChange}
          ref={inputRef}
          error={error}
          {...props}
        />
        <InputBackground error={error} isBorderAppear={isBorderAppear} />
      </InputWrapper>
    </Box>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  width: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  ref: PropTypes.func,
  isBorderAppear: PropTypes.bool,
}

Input.defaultProps = { width: '34.5rem' }

export default forwardRef(function InputWrapper(props, ref) {
  return Input({ ref, ...props })
})
