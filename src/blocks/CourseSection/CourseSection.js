import React from 'react'
import { Paper, Flex, Text } from '@/ui'
import { Arrow } from '@/icons'
import PropTypes from 'prop-types'
import { CourseSectionWrap, ArrowWrap } from './CourseSection.styled'
import {
  AccordionWrapper,
  AccordionCollapse,
  AccordionToggle,
} from '@/components'
import { LessonBlock } from '@/blocks'
import { FormattedMessage, FormattedPlural } from 'react-intl'

const CourseSection = ({ titleSection, lesson }) => {
  return (
    <Paper variant="background" radius="r2" py="sm" px="lg">
      <AccordionWrapper>
        <AccordionToggle eventKey="lesson">
          {({ isOpen }) => (
            <CourseSectionWrap>
              <Flex flexDirection="column">
                <Text variant="body16sb">{titleSection}</Text>
                <Text
                  variant="body12m"
                  color="text.grayDark"
                  textTransform="lowercase"
                >
                  {lesson.length}{' '}
                  <FormattedPlural
                    value={lesson.length}
                    one={<FormattedMessage id="lesson" />}
                    few={<FormattedMessage id="lessons" />}
                    other={<FormattedMessage id="lessons" />}
                  />
                </Text>
              </Flex>
              <ArrowWrap>
                <Arrow direction={isOpen ? 'up' : 'down'} />
              </ArrowWrap>
            </CourseSectionWrap>
          )}
        </AccordionToggle>
        <AccordionCollapse eventKey="lesson">
          <Flex flexDirection="column" gap="xs" my="md">
            {lesson.map(({ id, ...item }) => (
              <LessonBlock key={id} {...item} />
            ))}
          </Flex>
        </AccordionCollapse>
      </AccordionWrapper>
    </Paper>
  )
}

CourseSection.propTypes = {
  titleSection: PropTypes.string,
  lesson: PropTypes.array,
}
export default CourseSection
