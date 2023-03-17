import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Paper, Flex, Tag, Text } from '@/ui'
import { Popover, PopoverTrigger } from '@/components'

const SubjectsInCourses = ({ inCourse, courseAll, textTooltip }) => {
  return (
    <Flex gap="xs" alignItems="center">
      <PopoverTrigger
        trigger={['hover', 'focus']}
        placement="top-end"
        overlay={
          <Popover>
            <Paper p="sm" width="11.5rem" shadow="tooltip" radius="r1">
              <Text variant="caption10r">{textTooltip}</Text>
            </Paper>
          </Popover>
        }
      >
        <Tag backgroundColor="bg.dark" color="text.white">
          {inCourse}/{courseAll}
        </Tag>
      </PopoverTrigger>
      <Text variant="body12r">
        <FormattedMessage id="subjects_in_course" />
      </Text>
    </Flex>
  )
}
SubjectsInCourses.propTypes = {
  inCourse: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  courseAll: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textTooltip: PropTypes.string,
}
export default SubjectsInCourses
