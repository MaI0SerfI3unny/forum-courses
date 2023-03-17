import React from 'react'
import { Paper, Text, Flex } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { SubjectRatingItem } from '@/components'

const SubjectRatingItems = ({ dataRatingTags, width }) => {
  return (
    <Paper variant="lightBlue" padding="1.25rem" width={width}>
      <Text variant="H4mCaps" mb="lg">
        <FormattedMessage id="rating_per_subjects" />
      </Text>

      <Flex variant="column" gap="md">
        {dataRatingTags.map(({ ...dataRatingTags }, idx) => (
          <SubjectRatingItem key={idx} {...dataRatingTags} />
        ))}
      </Flex>
    </Paper>
  )
}

SubjectRatingItems.propTypes = {
  dataRatingTags: PropTypes.array,
  width: PropTypes.string,
}

export default SubjectRatingItems
