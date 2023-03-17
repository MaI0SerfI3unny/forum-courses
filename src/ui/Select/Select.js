import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { SelectContext } from '@/ui/SelectContext'
import { Popover, PopoverTrigger } from '@/components'
import {
  SelectContainer,
  Label,
  ArrowWrapper,
  OptionsContainer,
  ValueText,
  SelectBase,
} from './Select.styled'
import { Arrow } from '@/icons'
import { useRef } from 'react'

const Select = ({
  width,
  viewValue,
  children,
  label,
  value,
  onChange,
  ref,
  multiselect,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState(false)
  const selectContainerRef = useRef()

  const optionsContainerWidth = selectContainerRef.current?.offsetWidth

  const onChangeValue = (newValue) => {
    if (multiselect) {
      if (!Array.isArray(value)) {
        return onChange([newValue])
      }
      if (value.includes(newValue)) {
        return onChange(value.filter((val) => val !== newValue))
      }
      return onChange([...value, newValue])
    }
    setShowOptions(false)
    onChange(newValue)
  }

  const providerValue = {
    onChangeValue,
    value,
  }

  const onToggleShowOptions = (value) => {
    setShowOptions(value)
  }

  const selectedValue = value !== '' && !!value
  let labelElement = undefined

  let isLabel = false

  if (label) {
    isLabel = true
    labelElement = (
      <Label selectedValue={selectedValue || showOptions}>{label}</Label>
    )
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
          <OptionsContainer width={optionsContainerWidth}>
            <SelectContext.Provider value={providerValue}>
              {children}
            </SelectContext.Provider>
          </OptionsContainer>
        </Popover>
      }
    >
      <SelectContainer
        ref={selectContainerRef}
        width={width}
        isLabel={isLabel}
        {...props}
      >
        <SelectBase {...props} ref={ref} />
        {labelElement}
        <ValueText>{viewValue}</ValueText>
        <ArrowWrapper>
          <Arrow color="icon.dark" direction={showOptions ? 'up' : 'down'} />
        </ArrowWrapper>
      </SelectContainer>
    </PopoverTrigger>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
  ref: PropTypes.func,
  viewValue: PropTypes.string,
  multiselect: PropTypes.bool,
}

Select.defaultProps = { width: '34.5rem' }

export default forwardRef(function SelectWrapper(props, ref) {
  return Select({ ref, ...props })
})
