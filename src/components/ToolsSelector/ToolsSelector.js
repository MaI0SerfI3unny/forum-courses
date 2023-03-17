import React, { useState } from 'react'
import { Flex, ToolsItem, Select, Option, SearchTools } from '@/ui'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { selectTypeDef } from './definitions'

const ToolsSelector = ({ dataToolsList, selectedTools, setSelectedTools }) => {
  const { formatMessage } = useIntl()
  const [selectedType, setSelectedType] = useState('')

  let filteredToolsList = dataToolsList.filter(({ type }) => {
    if (type === selectedType) {
      return type
    }
    if (selectedType === '') {
      return dataToolsList
    }
  })

  const addNewTool = (item) => {
    setSelectedTools((tools) => {
      if (tools.includes(item)) {
        return tools
      }

      return [...tools, item]
    })
  }

  const removeTool = (idx) => {
    setSelectedTools((tools) => tools.filter((_, index) => index !== idx))
  }

  return (
    <Flex flexDirection="column" gap="sm">
      {selectedTools.map((props, idx) => (
        <ToolsItem key={idx} idx={idx} removeTool={removeTool} {...props} />
      ))}
      <Flex flexDirection="column" gap="1.25rem" width="100%">
        <Flex width="100%" gap="1.25rem">
          <Select
            label={`${formatMessage({
              id: 'select_type',
            })}`}
            value={selectedType}
            onChange={setSelectedType}
            width="9rem"
          >
            {selectTypeDef.map((option, idx) => (
              <Option key={idx} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <SearchTools
            width="42rem"
            toolsList={filteredToolsList}
            selectedType={selectedType}
            setSelectedTools={addNewTool}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

ToolsSelector.propTypes = {
  dataToolsList: PropTypes.array,
  selectedTools: PropTypes.array,
  setSelectedTools: PropTypes.func,
}

export default ToolsSelector
