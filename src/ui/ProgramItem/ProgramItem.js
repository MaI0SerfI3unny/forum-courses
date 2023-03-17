import React from 'react'
import { Flex, Row, Box, Image, Heading, Text, Button, Divider } from '@/ui'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Windows, Ios, Linux } from '@/icons'

const icons = {
  Windows: Windows,
  IOS: Ios,
  Linux: Linux,
}

const ProgramItem = ({
  title,
  system,
  price,
  programImg,
  widthIcon,
  color,
}) => {
  return (
    <>
      <Flex maxWidth="315px" gap="md">
        <Box>
          <Image
            variant="secondary"
            src={programImg}
            width={48}
            height={48}
            alt="alt"
          />
        </Box>
        <Flex flexDirection="column" gap="md">
          <Flex flexDirection="column" gap="xs">
            <Text variant="body14sb">{title}</Text>
            <Row gap="md">
              {system.map((item, idx) => {
                const Icon = icons[item]
                return (
                  <Flex gap="xxs" key={idx}>
                    <Icon width={widthIcon} color={color} />
                    <Text variant="body12r" color="text.grayDark">
                      {item}
                    </Text>
                  </Flex>
                )
              })}
            </Row>
          </Flex>
          <Flex flexDirection="column" gap="xs">
            <Flex alignItems="baseline" gap="xxs">
              <Heading variant="h3sb">${price}</Heading>
              <Text as="span" variant="body12r">
                {' '}
                / <FormattedMessage id="month" />
              </Text>
            </Flex>
            <Flex variant="column" gap="1.75rem">
              <Flex alignItems="center" gap="md">
                <Button variant="primarySmall">
                  <FormattedMessage id="get_it_here" />
                </Button>
                <Button variant="secondarySmall">
                  <FormattedMessage id="details" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider variant="horizontal" bg="bg.stroke" />
    </>
  )
}

ProgramItem.propTypes = {
  programImg: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  system: PropTypes.array,
  widthIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
}

ProgramItem.defaultProps = {
  widthIcon: 16,
  color: 'icon.white',
}
export default ProgramItem
