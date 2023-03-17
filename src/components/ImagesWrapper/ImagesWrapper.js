import React, { useState, useEffect, useRef } from 'react'
import { Flex, Img, Input, Text, ButtonClose } from '@/ui'
import { Label, ImageItem } from './ImagesWrapper.styled'
import { AddIcon } from '@/icons'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const IMAGE_MIME_TYPE = /image\/(png|jpg|jpeg)/i

const ImagesWrapper = ({ imagesList, newImage, setNewImage, isEditable }) => {
  const [newImageList, setNewImageList] = useState(imagesList)

  const inputFileRef = useRef()

  const inputHandler = (event) => {
    event.preventDefault()

    const file = inputFileRef.current.files[0]
    if (!file || !file.type.match(IMAGE_MIME_TYPE)) {
      return
    }

    setNewImage?.(file)
  }

  const addNewImage = (item) => {
    setNewImageList((list) => [...list, item])
  }

  useEffect(() => {
    if (newImage) {
      const objectUrl = URL.createObjectURL(newImage)
      addNewImage(objectUrl)
    }
  }, [newImage])

  const onRemoveImage = (idx) => {
    setNewImageList((image) => image.filter((_, index) => index != idx))
  }

  return (
    <Flex alignItems="center" gap="0.625rem">
      {newImageList.map((item, idx) => (
        <ImageItem key={idx} size="3.75rem">
          <Img size="100%" src={item} width="100%" height="100%" />
          <ButtonClose
            onClick={() => onRemoveImage(idx)}
            variant="closeBg"
            color="icon.red"
          />
        </ImageItem>
      ))}
      {isEditable && (
        <Label newImage={newImage} setNewImage={setNewImage}>
          <Input type="file" onChange={inputHandler} ref={inputFileRef} />
          <Flex gap="0.625rem" alignItems="center">
            <Flex
              variant="center"
              size="3.75rem"
              bg="bg.lowBg"
              border="1px solid"
              borderColor="border.low"
              borderRadius="0.25rem"
            >
              <AddIcon />
            </Flex>
            <Text variant="body12m" color="text.grayNormal">
              <FormattedMessage id="add_image" />
            </Text>
          </Flex>
        </Label>
      )}
    </Flex>
  )
}

ImagesWrapper.propTypes = {
  imagesList: PropTypes.array,
  newImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setNewImage: PropTypes.func,
  isEditable: PropTypes.bool,
}

export default ImagesWrapper
