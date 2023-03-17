import React, { useState } from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import PropTypes from 'prop-types'
import { Box } from '@/ui'
import { SelectContext } from '@/ui/SelectContext'
import { Popover, PopoverTrigger } from '@/components'
import { Arrow } from '@/icons'

const SelectContainer = styled(Box)(
  css({
    position: ' relative',
    boxSizing: 'border-box',
    userSelect: 'none',
    cursor: 'pointer',
  }),
)
const Input = styled.input(
  css({
    bottom: '0px',
    left: '0px',
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  }),
)

const ArrowWrapper = styled(Box)(
  css({
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    position: 'absolute',
  }),
)

const OptionsContainer = styled(Box)(
  css({
    borderRadius: 1,
    bg: 'bg.white',
    overflow: 'hidden',
    marginTop: '-0.25rem',
    boxShadow: '0px 0px 20px rgba(63, 69, 131, 0.1)',
  }),
)

const ValueText = styled(Box)(
  css({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'light',
    fontSize: 'xxs',
    lineHeight: 'sm',
    color: 'text.dark',
  }),
)

const SortSelect = ({ width, children, name, value, onChange, ...props }) => {
  const [showOptions, setShowOptions] = useState(false)

  const onChangeValue = (value) => {
    setShowOptions(false)
    onChange?.(value)
  }

  const providerValue = {
    onChangeValue,
    value,
  }

  const onToggleShowOptions = (value) => {
    setShowOptions(value)
  }

  return (
    <PopoverTrigger
      trigger="click"
      placement="bottom"
      rootClose
      show={showOptions}
      onToggle={onToggleShowOptions}
      overlay={
        <Popover>
          <OptionsContainer width={width}>
            <SelectContext.Provider value={providerValue}>
              {children}
            </SelectContext.Provider>
          </OptionsContainer>
        </Popover>
      }
    >
      <SelectContainer width={width} {...props}>
        <Input onChange={() => {}} value={value} name={name} />
        <ValueText>{value}</ValueText>
        <ArrowWrapper>
          <Arrow
            color="icon.dark"
            width={20}
            direction={showOptions ? 'up' : 'down'}
          />
        </ArrowWrapper>
      </SelectContainer>
    </PopoverTrigger>
  )
}

SortSelect.propTypes = {
  labelId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
}

SortSelect.defaultProps = { width: '5.625rem' }

export default SortSelect
