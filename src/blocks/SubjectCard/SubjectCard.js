import React from 'react'
import {
  Paper,
  Flex,
  Button,
  ButtonFavorite,
  Tag,
  Heading,
  Label,
  Text,
  Image,
} from '@/ui'
import {
  RatingFollower,
  SubjectGroup,
  AccordionWrapper,
  AccordionCollapse,
  AccordionToggle,
  ContentLoaderSubjectBlock,
  ContentLoaderBlock,
} from '@/components'

import { Arrow } from '@/icons'
import { ArrowWrap, StudyWrap } from './SubjectCard.styled'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

const SubjectCard = (props) => {
  const {
    subjectImage,
    title,
    subjectsItems,
    label,
    subject,
    prerequisites,
    rating,
    follower,
    status,
    like,
    isLoading,
    type,
  } = props

  return (
    <Paper p="1.125rem">
      {isLoading ? (
        subjectImage ? (
          <ContentLoaderSubjectBlock />
        ) : (
          <ContentLoaderBlock />
        )
      ) : (
        <AccordionWrapper>
          <AccordionToggle eventKey={`${label}-${title}`}>
            {({ isOpen }) => (
              <StudyWrap>
                <Flex
                  gap="lg"
                  alignItems="center"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  {subjectImage !== undefined && (
                    <Image
                      variant="secondary"
                      src={subjectImage}
                      width={64}
                      height={64}
                      alt="card"
                    />
                  )}
                  <Flex
                    gap="xs"
                    flexDirection="column"
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                  >
                    <Flex gap="md" alignItems="center">
                      <Heading variant="h3sb" textTransform="capitalize">
                        {title}
                      </Heading>
                      {label && (
                        <Label variant={label === 'must_know' ? 'red' : 'blue'}>
                          <FormattedMessage id={label} />
                        </Label>
                      )}
                    </Flex>
                    <Flex gap="md" alignItems="center">
                      {subjectsItems && (
                        <Text
                          variant="body11m"
                          textTransform="uppercase"
                          color="text.grayDark"
                        >
                          {subject}
                          <Text
                            as="span"
                            variant="body11m"
                            color="text.green"
                            ml="xxs"
                          >
                            {subjectsItems.length}
                          </Text>
                        </Text>
                      )}
                      {prerequisites && (
                        <Text
                          variant="body11m"
                          textTransform="uppercase"
                          color="text.grayDark"
                        >
                          <FormattedMessage id="prerequisites" />
                          <Text
                            as="span"
                            variant="body11m"
                            color="text.green"
                            ml="xxs"
                          >
                            {prerequisites.length}
                          </Text>
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="3.5rem"
                  pr="3.375rem"
                  alignItems="center"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  {rating && (
                    <RatingFollower
                      rating={rating}
                      follower={follower}
                      label={label}
                    />
                  )}
                  <ButtonFavorite liked={like} />
                  <Flex gap="md" alignItems="center">
                    {status && <Tag variant="number">{status}</Tag>}

                    <Button variant="primarySmall">
                      <FormattedMessage id="learn" />
                    </Button>
                  </Flex>
                </Flex>
                <ArrowWrap>
                  {type === 'general' && (
                    <Arrow direction={isOpen ? 'up' : 'down'} />
                  )}
                </ArrowWrap>
              </StudyWrap>
            )}
          </AccordionToggle>
          <AccordionCollapse eventKey={`${label}-${title}`}>
            <SubjectGroup {...props} />
          </AccordionCollapse>
        </AccordionWrapper>
      )}
    </Paper>
  )
}

SubjectCard.propTypes = {
  subjectImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  subjectsItems: PropTypes.array,
  label: PropTypes.string,
  subject: PropTypes.string,
  prerequisites: PropTypes.array,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  follower: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  like: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
}
export default SubjectCard
