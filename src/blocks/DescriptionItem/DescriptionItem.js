import React from 'react'
import { Paper, TextHtml } from '@/ui'
import PropTypes from 'prop-types'

const DescriptionItem = ({ description }) => {
  return (
    <Paper p="xl" radius="r1">
      <TextHtml text={description} />
    </Paper>
  )
}

DescriptionItem.propTypes = {
  description: PropTypes.string,
}
export default DescriptionItem
