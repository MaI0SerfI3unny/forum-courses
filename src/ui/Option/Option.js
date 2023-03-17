import React, { memo } from 'react'
import { useSelectContext } from '@/ui/SelectContext'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import styled from 'styled-components'
import { Box } from '@/ui'

const OptionItem = styled(Box)(
  css({
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'normal',
    fontSize: 'xxs',
    lineHeight: '150%',
    color: 'text.dark',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: 'bg.white',
    ':hover': {
      color: 'text.blueLight',
    },
  }),
)

function Option({ value, option, children, ...props }) {
  const { onChangeValue } = useSelectContext()

  let optionValue = value
  let label = children
  if (typeof option === 'object') {
    optionValue = option?.value ?? optionValue
    label = option?.label ?? label
  }

  return (
    <OptionItem onClick={() => onChangeValue(optionValue)} {...props}>
      {label}
    </OptionItem>
  )
}

Option.propTypes = {
  value: PropTypes.any,
  children: PropTypes.any,
  name: PropTypes.string,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default memo(Option)
