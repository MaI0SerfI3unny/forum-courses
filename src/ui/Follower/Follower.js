import PropTypes from 'prop-types'
import { Flex, Text } from '@/ui'
import { People } from '@/icons'

const Follower = ({ number }) => {
  return (
    <Flex gap="xs" alignItems="baseline">
      <People width={12} />
      <Text variant="body14m" color="text.grayDark">
        {number}
      </Text>
    </Flex>
  )
}

Follower.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default Follower
