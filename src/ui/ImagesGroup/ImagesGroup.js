import React from 'react'
import PropTypes from 'prop-types'
import { Flex, ImagesGroupItem, LastBlockInGroup } from '@/ui'

export default function ImagesGroup({ images }) {
  const startShowElements = 3
  let listImages = images
  listImages = images.slice(0, startShowElements)
  const restImages = images.length - startShowElements

  return (
    <Flex>
      {listImages.map((image, idx) => (
        <ImagesGroupItem key={idx} image={image} />
      ))}
      {restImages > 0 && <LastBlockInGroup ml="md" restImages={restImages} />}
    </Flex>
  )
}

ImagesGroup.propTypes = {
  images: PropTypes.array,
}
