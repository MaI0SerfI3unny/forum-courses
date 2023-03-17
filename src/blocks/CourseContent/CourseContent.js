import React from 'react'
import { Paper, Box, Flex, Heading, Text } from '@/ui'
import { FormattedMessage, FormattedPlural } from 'react-intl'
import { CourseSection } from '@/blocks'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

const AddAfterImg = styled(Box)(
  css({
    position: 'relative',
    marginRight: 'lg',
    '&:not(:last-child)::after': {
      content: '""',
      position: 'absolute',
      right: '-1.25rem',
      top: '50%',
      width: 'md',
      height: 'md',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      transform: 'translateY(-50%)',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99998 10.6667C9.47274 10.6667 10.6666 9.47277 10.6666 8.00001C10.6666 6.52725 9.47274 5.33334 7.99998 5.33334C6.52722 5.33334 5.33331 6.52725 5.33331 8.00001C5.33331 9.47277 6.52722 10.6667 7.99998 10.6667Z' stroke='%2363AD71' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
    },
  }),
)

const CourseContent = ({ section, lesson }) => {
  return (
    <Paper p="xl" radius="r1">
      <Flex flexDirection="column" gap="1.286rem">
        <Flex flexDirection="column" gap="sm">
          <Heading variant="h3sb">
            <FormattedMessage id="course_content" />
          </Heading>
          <Flex>
            <AddAfterImg>
              <Text variant="body12r" color="text.grayDark">
                {section.length}{' '}
                <FormattedPlural
                  value={section.length}
                  one={<FormattedMessage id="section" />}
                  few={<FormattedMessage id="sections" />}
                  other={<FormattedMessage id="sections" />}
                />
              </Text>
            </AddAfterImg>
            <AddAfterImg>
              <Text
                variant="body12r"
                color="text.grayDark"
                textTransform="lowercase"
              >
                {lesson}{' '}
                <FormattedPlural
                  value={lesson}
                  one={<FormattedMessage id="lesson" />}
                  few={<FormattedMessage id="lessons" />}
                  other={<FormattedMessage id="lessons" />}
                />
              </Text>
            </AddAfterImg>
            <AddAfterImg>
              <Text
                variant="body12r"
                color="text.grayDark"
                text-transform="lowercase"
              >
                10h 23m <FormattedMessage id="total_length" />
              </Text>
            </AddAfterImg>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="xs">
          {section.map(({ id, ...item }) => (
            <CourseSection key={id} {...item} />
          ))}
        </Flex>
      </Flex>
    </Paper>
  )
}

CourseContent.propTypes = {
  section: PropTypes.array,
  lesson: PropTypes.number,
}
export default CourseContent
