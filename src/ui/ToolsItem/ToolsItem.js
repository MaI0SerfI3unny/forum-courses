import React from 'react'
import { Flex, Paper, Img, Text, ButtonClose } from '@/ui'
import PropTypes from 'prop-types'
import notFoundImage from '@/assets/not_found_image.png'

const ToolsItem = ({ url, title, idx, removeTool }) => {
  return (
    <Paper variant="secondary" px="1.5rem" py="0.875rem">
      <Flex variant="rowBetween" width="100%" gap="lg">
        <Flex alignItems="center" gap="sm">
          {url ? (
            <Img src={url} width="32px" height="32px" />
          ) : (
            <Img src={notFoundImage} width="32px" height="32px" />
          )}
          <Text variant="body14m">{title}</Text>
        </Flex>
        <ButtonClose
          variant="closeBg"
          color="icon.low"
          onClick={() => removeTool(idx)}
        />
      </Flex>
    </Paper>
  )
}

ToolsItem.propTypes = {
  url: PropTypes.object,
  title: PropTypes.string,
  idx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  removeTool: PropTypes.func,
}

export default ToolsItem
