import { Input } from '@/ui'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

export default function FormInput({
  name,
  withIntl,
  label,
  placeholder,
  ...props
}) {
  const { register, formState } = useFormContext()
  const { formatMessage } = useIntl()

  let labelText = label
  if (withIntl && labelText) {
    labelText = formatMessage({ id: labelText })
  }

  let placeholderText = placeholder
  if (withIntl && placeholderText) {
    placeholderText = formatMessage({ id: placeholder })
  }

  const error = formState.errors[name]?.message

  let errorText = error
  if (withIntl && error) {
    errorText = formatMessage({ id: errorText })
  }

  return (
    <Input
      {...props}
      placeholder={placeholderText}
      {...register(name)}
      label={labelText}
      error={errorText}
    />
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  withIntl: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

FormInput.defaultProps = {
  withIntl: true,
}
