import React from 'react'
import { Button } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useModal } from '@/context'

export default function ButtonAddQuestion(props) {
  const { openModal } = useModal()
  return (
    <Button onClick={() => openModal('AddQuestion')} {...props}>
      <FormattedMessage id="add_question" />
    </Button>
  )
}
