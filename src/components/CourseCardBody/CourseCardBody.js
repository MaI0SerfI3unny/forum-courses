import React from 'react'
import { Flex } from '@/ui'
import { Comments, SubjectRatingItems } from '@/components'
import { dataComment, dataRatingTags } from '@/mock'

const CourseCardBody = (props) => {
  return (
    <Flex py="xl" gap="6rem" justifyContent="space-between">
      <Comments dataComment={dataComment} {...props} />
      <SubjectRatingItems width="16.5rem" dataRatingTags={dataRatingTags} />
    </Flex>
  )
}

export default CourseCardBody
