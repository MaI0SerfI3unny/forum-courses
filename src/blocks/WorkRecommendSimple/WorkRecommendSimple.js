import PropTypes from 'prop-types'
import { Paper, Text } from '@/ui'

const WorkRecommendSimple = ({ text }) => {
  return (
    <Paper py="1.25rem" px="lg">
      <Text variant="body12sb" maxWidth="49.188rem">
        {text}
      </Text>
    </Paper>
  )
}

WorkRecommendSimple.propTypes = {
  text: PropTypes.string,
}
export default WorkRecommendSimple
