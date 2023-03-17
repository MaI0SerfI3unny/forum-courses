import React from 'react'
import { Flex, RadioButton, Text } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const RadioWrapper = ({ radioValue, setRadioValue, radioData }) => {
  return (
    <Flex alignItems="center" gap="2.5rem">
      {radioData.map((item, idx) => (
        <Flex key={idx} alignItems="center" gap="sm">
          <RadioButton
            checked={item === radioValue}
            value={item}
            onChange={() => setRadioValue(item)}
          />
          <Text>
            <FormattedMessage id={item} />
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

RadioWrapper.propTypes = {
  radioValue: PropTypes.string,
  setRadioValue: PropTypes.func,
  radioData: PropTypes.array,
}

export default RadioWrapper
