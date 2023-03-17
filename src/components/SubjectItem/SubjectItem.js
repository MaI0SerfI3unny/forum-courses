import React from 'react'
import { Paper, Flex, Text, ButtonFavorite, Button } from '@/ui'
import { FormattedMessage } from 'react-intl'
import { Likes } from '@/components'
import PropTypes from 'prop-types'

const SubjectItem = ({ courseTitle, likes, dislikes, buttonType }) => {
  return (
    <Paper p="sm" variant="secondary" width="calc(100%/5)" minWidth="18.25rem">
      <Flex variant="column" gap="1.75rem">
        <Flex justifyContent="space-between" alignItems="center" gap="md">
          <Text variant="body16sb">{courseTitle}</Text>
          <ButtonFavorite />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" gap="md">
          <Likes likes={likes} dislikes={dislikes} />
          <Button variant="secondarySmall">
            <FormattedMessage id={buttonType} />
          </Button>
        </Flex>
      </Flex>
    </Paper>
  )
}

SubjectItem.propTypes = {
  courseTitle: PropTypes.string,
  likes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dislikes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  buttonType: PropTypes.string,
}

export default SubjectItem
