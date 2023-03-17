import React from 'react'
import {
  AccordionWrapper,
  AccordionCollapse,
  AccordionToggle,
  Likes,
  CourseCardBody,
} from '@/components'
import {
  Paper,
  Flex,
  Box,
  Heading,
  Text,
  Tag,
  ButtonFavorite,
  Button,
  Img,
  SubjectsInCourses,
} from '@/ui'
import { Video, AlarmClock, Book, Arrow } from '@/icons'
import PropTypes from 'prop-types'
import { FormattedMessage, FormattedPlural, useIntl } from 'react-intl'
import { CourseCardWrap, ArrowWrap } from './CourseCard.styled'
import noPhoto from '@/assets/not_found_image.png'
import { BACKEND_MEDIA } from 'config'
import { AvatarOrTextSource } from '@/components'
import { dataSourceList } from '@/mock/dataRecommendCourse'

const CourseCard = ({
  course_photo_url,
  type,
  name,
  hour,
  lesson,
  pros,
  cons,
  source,
  exp,
  payment_price,
  payment,
  inCourse,
  courseAll,
  likes,
  dislikes,
  liked,
}) => {
  const { formatMessage } = useIntl()

  return (
    <Paper py="1.125rem" pl="1.125rem" pr="4.5rem">
      <AccordionWrapper>
        <AccordionToggle eventKey={`${name}-${lesson}`}>
          {({ isOpen }) => (
            <CourseCardWrap>
              <Flex
                gap="2.5rem"
                alignItems="center"
                onClick={(event) => {
                  event.stopPropagation()
                }}
              >
                <Box>
                  <Img
                    variant="secondary"
                    width={150}
                    height={150}
                    loader={() =>
                      course_photo_url
                        ? BACKEND_MEDIA + course_photo_url
                        : noPhoto.src
                    }
                    src={
                      course_photo_url
                        ? BACKEND_MEDIA + course_photo_url
                        : noPhoto.src
                    }
                    alt="alt"
                  />
                </Box>

                <Flex gap="lg" flexDirection="column">
                  <Box>
                    <AvatarOrTextSource 
                    gallery={dataSourceList.filter((el) => el.id === source)}/>
                  </Box>
                  <Flex gap="xs" flexDirection="column">
                    <Heading variant="h3sb">{name}</Heading>
                    <Flex gap="1.25rem">
                      <Flex gap="0.313rem">
                        <Video width={16} color="icon.blueLight" />
                        <Text variant="body12r" color="text.grayDark">
                          {type}
                        </Text>
                      </Flex>
                      <Flex gap="0.313rem">
                        <AlarmClock width={16} color="icon.blueLight" />
                        <Text variant="body12r" color="text.grayDark">
                          {'- '}
                          <FormattedPlural
                            value={hour}
                            one={<FormattedMessage id="hour" />}
                            few={<FormattedMessage id="hours" />}
                            other={<FormattedMessage id="hours" />}
                          />
                        </Text>
                      </Flex>
                      <Flex gap="0.313rem">
                        <Book width={16} color="icon.blueLight" />
                        <Text variant="body12r" color="text.grayDark">
                          {'- '}
                          <FormattedPlural
                            value={lesson}
                            one={<FormattedMessage id="lesson" />}
                            few={<FormattedMessage id="lessons" />}
                            other={<FormattedMessage id="lessons" />}
                          />
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex gap="md">
                    <Tag color="text.green">
                      <FormattedMessage id="pros" /> {0}
                    </Tag>
                    <Tag color="text.red">
                      <FormattedMessage id="cons" /> {0}
                    </Tag>
                    <Tag color="text.blueLight">
                      <FormattedMessage id="exp" /> {0}
                    </Tag>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection="column" alignItems="flex-end">
                <Flex
                  gap="3.5rem"
                  mb="1.25rem"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <ButtonFavorite liked={liked} />
                  <Flex gap="md" alignItems="center">
                    <Heading variant="h3sb">
                      {payment === 'Free' ? payment : `$${payment_price}`}
                    </Heading>
                    <Button variant="primarySmall">
                      <FormattedMessage id="to_the_course" />
                    </Button>
                  </Flex>
                </Flex>
                <Box
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <Likes mb="1.688rem" likes={likes} dislikes={dislikes} />
                </Box>
                <Box
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <SubjectsInCourses
                    inCourse={inCourse}
                    courseAll={courseAll}
                    textTooltip={formatMessage({
                      id: 'number_of_subjects_in_course',
                    })}
                  />
                </Box>
              </Flex>
              <ArrowWrap>
                <Arrow direction={isOpen ? 'up' : 'down'} />
              </ArrowWrap>
            </CourseCardWrap>
          )}
        </AccordionToggle>

        <AccordionCollapse eventKey={`${name}-${lesson}`}>
          <CourseCardBody pros={pros} cons={cons} exp={exp} />
        </AccordionCollapse>
      </AccordionWrapper>
    </Paper>
  )
}

CourseCard.propTypes = {
  course_photo_url: PropTypes.string,
  companyImage: PropTypes.object,
  source: PropTypes.string,
  type: PropTypes.string,
  payment: PropTypes.string,
  payment_price: PropTypes.number,
  name: PropTypes.string,
  hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lesson: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pros: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cons: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  exp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inCourse: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  courseAll: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  liked: PropTypes.bool,
}
export default CourseCard
