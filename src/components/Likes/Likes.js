import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex, ButtonLikes } from '@/ui'

const Likes = ({ likes, dislikes, ...props }) => {
  const [like, setLike] = useState(likes ?? '0')
  const [disLike, setDisLike] = useState(dislikes ?? '0')

  let addLike = () => {
    let newLike = like + 1
    setLike(newLike)
  }

  let addDisLike = () => {
    let newDisLike = disLike + 1
    setDisLike(newDisLike)
  }

  if (like && disLike > 1) {
    true
  }

  return (
    <Flex gap="xxs" {...props}>
      <ButtonLikes
        variant="like"
        active={!!like}
        number={like}
        onClick={addLike}
      />
      <ButtonLikes
        variant="disLike"
        active={!!disLike}
        number={disLike}
        onClick={addDisLike}
      />
    </Flex>
  )
}
Likes.propTypes = {
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dislikes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Likes
