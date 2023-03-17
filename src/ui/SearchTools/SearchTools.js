import React, { useState } from 'react'
import { Input, Text, Flex, Img, Paper } from '@/ui'
import { useSearchInput } from '@/utils'
import { Popover, PopoverTrigger } from '@/components'
import PropTypes from 'prop-types'
import notFoundImage from '@/assets/not_found_image.png'

const SearchTools = ({ toolsList, width, selectedType, setSelectedTools }) => {
  const newToolsList = toolsList.map((item) => item.title)
  const { searchInput, onSearchChange, dataList } = useSearchInput(
    '',
    newToolsList,
  )

  const onChangeTools = (value) => {
    setSelectedTools(value)
  }

  const [showSearchTooltip, setShowSearchTooltip] = useState(false)

  const onToggleShowOptions = (value) => {
    setShowSearchTooltip(value)
  }

  return (
    <PopoverTrigger
      width={width}
      position="relative"
      trigger="click"
      placement="bottom"
      rootClose
      show={showSearchTooltip}
      onToggle={onToggleShowOptions}
      overlay={
        <Popover>
          {dataList.length !== 0 && showSearchTooltip && (
            <Paper
              variant="primary"
              shadow="tooltip"
              radius="r1"
              border="primary"
              padding="sm"
              width={width}
            >
              <Flex flexDirection="column" gap="sm">
                {toolsList.map(({ url }, idx) => {
                  if (dataList[idx]) {
                    return (
                      <Flex
                        key={idx}
                        onClick={() => {
                          onSearchChange('')
                          setShowSearchTooltip(false)
                          onChangeTools(toolsList[idx])
                        }}
                        cursor="pointer"
                        alignItems="center"
                        gap={4}
                      >
                        {url ? (
                          <Img width="24px" height="24px" src={url} />
                        ) : (
                          <Img width="24px" height="24px" src={notFoundImage} />
                        )}

                        <Text
                          variant="body14m"
                          dangerouslySetInnerHTML={{ __html: dataList[idx] }}
                        ></Text>
                      </Flex>
                    )
                  }
                })}
              </Flex>
            </Paper>
          )}
        </Popover>
      }
    >
      <Input
        value={searchInput}
        onChange={(e) => {
          onSearchChange(e.target.value)
          setShowSearchTooltip(true)
        }}
        placeholder={selectedType ? selectedType : 'Tool / Program Name'}
        width={width}
      />
    </PopoverTrigger>
  )
}

SearchTools.propTypes = {
  toolsList: PropTypes.array,
  width: PropTypes.string,
  selectedType: PropTypes.string,
  setSelectedTools: PropTypes.func,
}

export default SearchTools
