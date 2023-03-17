import React from 'react'
import { Flex, Img } from '@/ui'
import PropTypes from 'prop-types'
import { CustomRadioItem } from './CustomRadio.styles'
import { FormattedMessage } from 'react-intl'

const CustomRadio = ({ itemList, value, setValue }) => {
  return (
    <Flex gap="0.5rem">
      {itemList.map(({ id, text, url }, idx) => (
        <CustomRadioItem
          variant="center"
          active={id === value}
          onClick={() => setValue(id)}
          key={idx}
          id={id}
        >
          {url ? (
            <Img src={url} />
          ) : id === 'other' ? (
            <FormattedMessage id="other" />
          ) : (
            text
          )}
        </CustomRadioItem>
      ))}
    </Flex>
  )
}

CustomRadio.propTypes = {
  itemList: PropTypes.array,
  value: PropTypes.string,
  setValue: PropTypes.func,
}

export default CustomRadio
