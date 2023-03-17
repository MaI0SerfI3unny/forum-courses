import { useField } from 'formik'
import PropTypes from 'prop-types'
import { CheckBox, Flex, Text } from '@/ui'
import { FormattedMessage } from 'react-intl'
import CheckboxLabel from '../CheckboxLabel'

export default function FormikCheckbox({ name, variant, label, ...props }) {
  const [field] = useField(name)
  return (
    <Flex alignItems="center" gap="0.5rem">
      <CheckBox name={name} variant={variant} {...field} {...props} />
      {(
        <CheckboxLabel>
          <Text variant="textSmallMedium">{label}</Text>
        </CheckboxLabel>
      ) ?? (
        <CheckboxLabel>
          <Text>
            <FormattedMessage id={name} />
          </Text>
        </CheckboxLabel>
      )}
    </Flex>
  )
}

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
}
