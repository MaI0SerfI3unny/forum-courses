import React from 'react'
import { Flex, Input, Button, ButtonClose, Select, Option } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const AddNewOption = ({ options, setOptions, label, selectData }) => {
  const addNewOption = () => {
    let newOptions = ''
    setOptions((prevOption) => [...prevOption, newOptions])
    console.log(options)
  }

  const onChangeOption = (value, idx) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions]
      newOptions[idx] = value
      return newOptions
    })
  }

  const removeOption = (idx) => {
    setOptions((options) => options.filter((_, index) => index !== idx))
  }

  return (
    <Flex flexDirection="column" gap="0.625rem">
      {options.map((option, idx) => {
        return (
          <Flex
            key={idx}
            alignItems="center"
            gap="0.625rem"
            position="relative"
          >
            {selectData ? (
              <Select
                width="100%"
                value={option}
                label={label}
                onChange={(value) => onChangeOption(value, idx)}
              >
                {selectData.map((item, idx) => (
                  <Option key={idx} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            ) : (
              <Input
                value={option}
                key={idx}
                onChange={(e) => onChangeOption(e.target.value, idx)}
                width="100%"
                placeholder={label}
              />
            )}

            {options.length > 1 && (
              <ButtonClose
                variant="closeBg"
                color="icon.grayDark"
                onClick={() => removeOption(idx)}
              />
            )}
          </Flex>
        )
      })}
      <Button variant="link" onClick={addNewOption} width="100%">
        + <FormattedMessage id="add_another_option" />
      </Button>
    </Flex>
  )
}

AddNewOption.propTypes = {
  options: PropTypes.array,
  setOptions: PropTypes.func,
  label: PropTypes.string,
  selectData: PropTypes.array,
}

export default AddNewOption
