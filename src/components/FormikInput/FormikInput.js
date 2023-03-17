import { useIntl } from 'react-intl'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import { Input } from '@/ui'

export default function FormikInput({
  name,
  placeholder,
  isBorderAppear,
  ...props
}) {
  const [field, meta] = useField(name)
  const { touched, error } = meta
  const { formatMessage } = useIntl()
  const placeHolder = !!placeholder && formatMessage({ id: placeholder })

  const errorText = touched && error && formatMessage({ id: error })

  return (
    <Input
      error={errorText}
      placeholder={placeHolder}
      isBorderAppear={isBorderAppear}
      {...field}
      {...props}
    />
  )
}

FormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isBorderAppear: PropTypes.bool,
}
