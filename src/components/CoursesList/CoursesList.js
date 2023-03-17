import React from 'react'
import { Flex, Text, Paper, Box } from '@/ui'
import {
  AccordionWrapper,
  AccordionCollapse,
  AccordionToggle,
} from '@/components'
import PropTypes from 'prop-types'
import CourseItem from './CourseItem'
import { Arrow } from '@/icons'
import { FormattedMessage } from 'react-intl'
import { StudyWrap, ArrowWrap } from './CourseList.styled'

const CoursesList = ({ dataCoursesList }) => {
  return (
    <Flex flexDirection="column" width="100%" gap="sm">
      {dataCoursesList.map(({ title, lessons }, idx) => (
        <AccordionWrapper key={idx}>
          <Paper variant="secondary" py="0.75rem" px="1.5rem">
            <Flex flexDirection="column" gap="1.5rem">
              <AccordionToggle eventKey={`lesson-${idx}`}>
                {({ isOpen }) => (
                  <StudyWrap>
                    <Box>
                      <Text variant="body16sb">
                        <FormattedMessage id="course.section" /> {idx + 1} -{' '}
                        {title}
                      </Text>
                      <Text color="text.grayNormal" variant="body12m">
                        {lessons.length}{' '}
                        {lessons.length === 1 ? (
                          <FormattedMessage id="course.lesson" />
                        ) : (
                          <FormattedMessage id="course.lessons" />
                        )}
                      </Text>
                    </Box>

                    <ArrowWrap>
                      <Arrow
                        color="icon.grayNormal"
                        direction={isOpen ? 'up' : 'down'}
                      />
                    </ArrowWrap>
                  </StudyWrap>
                )}
              </AccordionToggle>
              <AccordionCollapse eventKey={`lesson-${idx}`}>
                <Flex flexDirection="column" gap="xs">
                  {lessons.map((props, idx) => (
                    <CourseItem key={idx} lessonNum={idx + 1} {...props} />
                  ))}
                </Flex>
              </AccordionCollapse>
            </Flex>
          </Paper>
        </AccordionWrapper>
      ))}
    </Flex>
  )
}

CoursesList.propTypes = {
  dataCoursesList: PropTypes.array,
}

export default CoursesList
