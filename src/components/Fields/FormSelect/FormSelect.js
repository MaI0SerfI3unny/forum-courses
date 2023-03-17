import { Option, Select } from '@/ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

const FormSelect = ({ options, name, label, withIntl, ...props }) => {
  const { setValue, getValues, formState, clearErrors } = useFormContext()
  const [selectValue, setSelectValue] = useState(getValues(name))

  const changeHandler = (value) => {
    clearErrors(name)
    setValue(name, value)
    setSelectValue(value)
  }

  const { formatMessage } = useIntl()

  let labelText = label
  if (withIntl && labelText) {
    labelText = formatMessage({ id: labelText })
  }

  const error = formState.errors[name]?.message

  let errorText = error
  if (withIntl && error) {
    errorText = formatMessage({ id: errorText })
  }

  let viewValue =
    selectValue &&
    options?.find(
      (option) => option.value === selectValue || option === selectValue,
    )
  if (viewValue?.label) {
    viewValue = viewValue.label
  }

  return (
    <Select
      {...props}
      onChange={changeHandler}
      value={selectValue}
      viewValue={viewValue}
      label={labelText}
      error={errorText}
    >
      {options?.map((option) => (
        <Option key={option.value ?? option} option={option} />
      ))}
    </Select>
  )
}

FormSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  withIntl: PropTypes.bool,
  label: PropTypes.string,
}

FormSelect.defaultProps = {
  width: 'auto',
  withIntl: true,
}

export default FormSelect
