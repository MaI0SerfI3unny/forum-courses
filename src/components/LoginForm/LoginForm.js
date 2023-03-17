import React from 'react'
import { Flex, Text, Button, Spinner } from '@/ui'
import { ButtonFacebook, ButtonGoogle, Form } from '@/components'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { FormInput, FormSelect } from '@/components/Fields'

const LoginForm = ({ onSubmit, fieldDefinition, isLoading, type }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Flex variant="columnCenter" gap="md">
        <Flex width="34.5rem" maxWidth="100%" gap="md" column>
          {fieldDefinition.map(
            ({ labelId, fieldId, type, options, ...field }) => {
              if (type === 'select') {
                return (
                  <FormSelect
                    key={fieldId}
                    name={labelId}
                    label={labelId}
                    options={options}
                    {...field}
                  />
                )
              }
              return (
                <FormInput
                  key={fieldId}
                  name={fieldId}
                  type={type}
                  placeholder={labelId}
                  {...field}
                />
              )
            },
          )}
        </Flex>
        <Button type="submit" my="md">
          <FormattedMessage id={`login.form.${type}.submit_button_text`} />
          {isLoading && <Spinner ml={4} size={16} color="bg.dark" />}
        </Button>
        <Text variant="body14m" color="text.grayDark" mb="lg">
          <FormattedMessage id="login.form.or" />
        </Text>
        <Flex width="100%" gap="lg">
          <ButtonFacebook flexGrow={1} loginType={type} />
          <ButtonGoogle flexGrow={1} loginType={type} />
        </Flex>
      </Flex>
    </Form>
  )
}

LoginForm.propTypes = {
  fieldDefinition: PropTypes.array,
  type: PropTypes.string,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
}

export default LoginForm
