import React from 'react'
import { Button } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { useModal } from '@/context'

export default function ButtonAddSubject(props) {
  const { openModal } = useModal()
  return (
    <Button onClick={() => openModal('AddSubject')} {...props}>
      <FormattedMessage id="add_subject" />
    </Button>
  )
}
