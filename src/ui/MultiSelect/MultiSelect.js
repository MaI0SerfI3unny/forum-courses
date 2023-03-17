import React, { useState } from 'react'
import { Popover, PopoverTrigger } from '@/components'
import { OptionsContainer, ValueText, Input } from '@/ui/Select/Select.styled'
import { SelectContainer, Label, OptionItem } from './MultiSelect.styled'
import { Row, SelectedTag } from '@/ui'
import PropTypes from 'prop-types'

const MultiSelect = ({
  width,
  name,
  label,
  value,
  onChange,
  options,
  maxSelected,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState(false)
  const onToggleShowOptions = (value) => {
    setShowOptions(value)
  }
  const selectedValue = value?.length !== 0
  let isLabel = false
  const isSelected = (id) => value?.includes(id)
  const onChangeSelected = (id) => {
    if (isSelected(id)) {
      return onChange?.(value?.filter((selectedId) => selectedId !== id))
    }
    if (maxSelected && value?.length >= maxSelected) {
      return
    }
    onChange?.([...value, id])
  }

  const optionValue = value?.map((id) =>
    options.find((option) => option.id === id),
  )

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
            {options?.map(({ name, id }) => (
              <OptionItem
                isSelected={isSelected(id)}
                key={id}
                onClick={() => onChangeSelected(id)}
              >
                {name}
              </OptionItem>
            ))}
          </OptionsContainer>
        </Popover>
      }
    >
      <SelectContainer width={width} isLabel={isLabel} {...props}>
        <Input onChange={() => {}} value={value} name={name} />
        {label && (
          <Label selectedValue={selectedValue || showOptions}>{label}</Label>
        )}
        <ValueText gap="xs">
          <Row gap="0.625rem">
            {optionValue?.map(({ name, id }) => (
              <SelectedTag
                key={id}
                onChangeSelected={onChangeSelected}
                title={name}
                id={id}
              />
            ))}
          </Row>
        </ValueText>
      </SelectContainer>
    </PopoverTrigger>
  )
}

MultiSelect.propTypes = {
  labelId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
  options: PropTypes.array,
  maxSelected: PropTypes.number,
}

MultiSelect.defaultProps = { width: '34.5rem' }

export default MultiSelect
