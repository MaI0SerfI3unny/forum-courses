import React from 'react'
import { Flex, Tag } from '@/ui'
import { Likes } from '@/components'
import PropTypes from 'prop-types'

const SubjectRatingItem = ({ id, likes, dislikes, active }) => {
  return (
    <Flex gap="md" alignItems="center" justifyContent="space-between">
      <Tag variant={active ? 'darkBlueFull' : 'darkBlue'}>{id}</Tag>
      <Likes likes={likes} dislikes={dislikes} />
    </Flex>
  )
}

SubjectRatingItem.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default SubjectRatingItem
