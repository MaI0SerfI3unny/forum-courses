import React from 'react'
import { Box, Text, Tag, Row } from '@/ui'
import { SubjectItem, ButtonAddSubSubject } from '@/components'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

const SubjectGroup = ({ subjectsItems, prerequisites, subject }) => {
  return (
    <Box pt="2.5rem" pl="0.375rem">
      {prerequisites && (
        <Box>
          <Text mb="xs" variant="body14m" color="text.grayDark">
            <FormattedMessage id="prerequisites" />
            <Text as="span" variant="body14m" color="text.green" ml="xxs">
              {prerequisites.length}
            </Text>
          </Text>
          <Row mb="1.625rem" gap="xs">
            {prerequisites.map((prerequisite, index) => (
              <Tag key={index} variant="normal">
                {prerequisite.name}
              </Tag>
            ))}
          </Row>
        </Box>
      )}
      {subjectsItems && (
        <Box>
          <Text
            mb="xs"
            variant="body14m"
            color="text.grayDark"
            textTransform="capitalize"
          >
            {subject}
            <Text as="span" variant="body14m" color="text.green" ml="xxs">
              {subjectsItems.length}
            </Text>
          </Text>
          <Row mb="1.625rem" gap="md">
            {subjectsItems.map((props, index) => (
              <SubjectItem key={index} {...props} />
            ))}
            <ButtonAddSubSubject />
          </Row>
        </Box>
      )}
    </Box>
  )
}

SubjectGroup.propTypes = {
  subjectsItems: PropTypes.array,
  prerequisites: PropTypes.array,
  subject: PropTypes.string,
}

export default SubjectGroup
