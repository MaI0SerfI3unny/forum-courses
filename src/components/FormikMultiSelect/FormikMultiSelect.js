import { useField } from 'formik'
import { MultiSelect } from '@/ui'
import PropTypes from 'prop-types'

const FormikMultiSelect = ({ name, label, options }) => {
  const [, meta, helpers] = useField(name)
  const { setValue } = helpers
  const { value } = meta

  return (
    <MultiSelect
      name={name}
      label={label}
      options={options}
      value={value ?? []}
      onChange={setValue}
    />
  )
}

export default FormikMultiSelect

FormikMultiSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}
