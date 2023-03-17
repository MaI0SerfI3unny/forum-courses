import PropTypes from 'prop-types'
import { Flex, Paper, Text } from '@/ui'
import { Time } from '@/icons'

const LessonBlock = ({ text, time }) => {
  return (
    <Paper py="0.875rem" px="lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Text variant="body14m" textTransform="capitalize">
          {text}
        </Text>
        <Flex gap="xs" alignItems="center">
          <Time color="icon.green" />
          <Text variant="body14m" color="text.grayDark">
            {time}
          </Text>
        </Flex>
      </Flex>
    </Paper>
  )
}
LessonBlock.propTypes = {
  text: PropTypes.string,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default LessonBlock
