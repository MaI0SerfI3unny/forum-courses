import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Box } from '@/ui'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form({ children, schema, onSubmit, ...props }) {
  let resolver
  if (schema) {
    resolver = yupResolver(schema)
  }

  const methods = useForm({ resolver, ...props })

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </Box>
    </FormProvider>
  )
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object,
}
