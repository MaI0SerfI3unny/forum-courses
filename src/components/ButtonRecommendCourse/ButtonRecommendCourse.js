import React from 'react'
import { Button } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useModal } from '@/context'

export default function ButtonRecommendCourse(props) {
  const { openModal } = useModal()
  return (
    <Button onClick={() => openModal('RecommendCourse')} {...props}>
      <FormattedMessage id="recommend_course" />
    </Button>
  )
}
