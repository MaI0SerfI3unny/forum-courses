import { Select } from '@/ui'
import { useField } from 'formik'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { useMemo } from 'react'

export default function FormikSelect({ name, label, list, ...props }) {
  const [field, meta, helpers] = useField(name)
  const { value, touched, error } = meta
  const { setValue } = helpers
  const { formatMessage } = useIntl()

  const labelText = useMemo(() => {
    if (!label) {
      return null
    }
    return formatMessage({ id: label })
  }, [label, formatMessage])

  const errorText = touched && error && formatMessage({ id: error })
  const selectedValue = list?.find((item) => item.id === value)

  return (
    <Select
      name={name}
      viewValue={selectedValue?.name}
      label={labelText}
      error={errorText}
      {...field}
      onChange={setValue}
      {...props}
    />
  )
}

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  viewValue: PropTypes.string,
}
