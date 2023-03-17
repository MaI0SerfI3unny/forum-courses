import React from 'react'
import { Flex, Text } from '@/ui'
import { ArrowRight } from '@/icons'
import PropTypes from 'prop-types'

const CourseDescriptionItem = ({ textItem, ...props }) => {
  return (
    <Flex alignItems="center" {...props}>
      <ArrowRight color="icon.yellow" />
      <Text variant="body14m">{textItem}</Text>
    </Flex>
  )
}

CourseDescriptionItem.propTypes = {
  textItem: PropTypes.string,
}
export default CourseDescriptionItem
