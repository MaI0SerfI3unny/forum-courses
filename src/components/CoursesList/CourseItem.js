import React from 'react'
import { Paper, Flex, Text, Box } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Time } from '@/icons'

const CourseItem = ({ subtitle, time, lessonNum }) => {
  return (
    <Paper py="0.75rem" px="1.5rem">
      <Flex variant="rowBetween">
        <Box>
          <Text color="text.grayNormal" variant="body12m" mb="xxs">
            <FormattedMessage id="lesson" /> {lessonNum}
          </Text>
          <Text variant="body16sb">{subtitle}</Text>
        </Box>
        <Flex variant="center" gap="xs">
          <Time color="icon.green" />
          <Text variant="body14m" color="grayDark">
            {time}
          </Text>
        </Flex>
      </Flex>
    </Paper>
  )
}

CourseItem.propTypes = {
  subtitle: PropTypes.string,
  time: PropTypes.string,
  lessonNum: PropTypes.number,
}

export default CourseItem
