import React from 'react'
import {
  Paper,
  Flex,
  Box,
  Heading,
  Text,
  Tag,
  ButtonFavorite,
  Button,
  Image,
  ImagesGroup,
  Label,
} from '@/ui'
import { Likes } from '@/components'
import { Video, AlarmClock, Book } from '@/icons'
import PropTypes from 'prop-types'
import { FormattedMessage, FormattedPlural } from 'react-intl'

const CourseInfo = ({
  companyImage,
  title,
  label,
  hour,
  lesson,
  pros,
  cons,
  exp,
  price,
  likes,
  dislikes,
  images,
}) => {
  return (
    <Flex gap="0.125rem">
      <Paper py="lg" px="xl" flexGrow="1" radius="r1">
        <Flex gap="2.5rem" alignItems="center">
          <Flex gap="2.125rem" flexDirection="column">
            <Flex gap="0.625rem" flexDirection="column">
              <Flex alignItems="center" gap="lg">
                <Heading variant="h1">{title}</Heading>
                {label && <Label variant="yellow">{label}</Label>}
              </Flex>

              <Flex gap="1.25rem">
                <Flex gap="0.313rem">
                  <Video width={16} color="icon.blueLight" />
                  <Text variant="body12r" color="text.grayDark">
                    <FormattedMessage id="video" />
                  </Text>
                </Flex>
                <Flex gap="0.313rem">
                  <AlarmClock width={16} color="icon.blueLight" />
                  <Text variant="body12r" color="text.grayDark">
                    {hour}{' '}
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
                    {lesson}{' '}
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
                <FormattedMessage id="pros" /> {pros}
              </Tag>
              <Tag color="text.red">
                <FormattedMessage id="cons" /> {cons}
              </Tag>
              <Tag color="text.blueLight">
                <FormattedMessage id="exp" /> {exp}
              </Tag>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
      <Paper py="lg" px="xl" radius="r1" minWidth="21.875rem">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Flex justifyContent="space-between" mb="xl">
            <Flex gap="md" alignItems="center">
              <Box>
                <Image src={companyImage} maxWidth={76} height={20} alt="alt" />
              </Box>
              <ImagesGroup images={images} />
            </Flex>

            <ButtonFavorite />
          </Flex>
          <Flex flexDirection="column">
            <Heading mb="xs" variant="h2">
              {price}
            </Heading>
            <Flex alignItems="center" justifyContent="space-between">
              <Button variant="primarySmall">
                <FormattedMessage id="to_the_course" />
              </Button>
              <Likes likes={likes} dislikes={dislikes} />
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  )
}

CourseInfo.propTypes = {
  companyImage: PropTypes.object,
  images: PropTypes.array,
  title: PropTypes.string,
  label: PropTypes.string,
  hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lesson: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pros: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cons: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  exp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  likes: PropTypes.number,
  dislikes: PropTypes.number,
}
export default CourseInfo
