import { Flex, Rating, Follower } from '@/ui'
import PropTypes from 'prop-types'

const RatingFollower = ({ rating, follower, label }) => {
  return (
    <Flex gap="md" alignItems="center">
      <Rating number={rating} label={label} />
      <Follower number={follower} />
    </Flex>
  )
}

RatingFollower.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  follower: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
}

export default RatingFollower
