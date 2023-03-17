import React from 'react'
import { Paper, Heading, Text, Flex, ProgramItem, Button, Divider } from '@/ui'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const ProgramItems = ({ program, ...props }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="lg"
      py="1.688rem"
      {...props}
    >
      <Heading variant="h3sb">
        <FormattedMessage id="what_i_need_for_this_course" />
      </Heading>
      <Paper px="md" pt="md" pb="lg" radius="r1" width="100%">
        <Flex flexDirection="column" gap="lg">
          <Flex flexDirection="column" gap="md">
            <Flex flexDirection="column" gap="xs">
              <Heading variant="H4mCaps">
                <FormattedMessage id="vector_design_program" />
              </Heading>
              <Text variant="body12r" color="text.grayDark">
                <FormattedMessage id="other_users_recommend_this_options" />
              </Text>
            </Flex>
            <Divider variant="horizontal" bg="bg.stroke" />
          </Flex>
          <Flex flexDirection="column" gap="1.125rem">
            <Flex variant="column" gap="lg">
              {program.map(({ ...item }, idx) => (
                <ProgramItem key={idx} {...item} />
              ))}
            </Flex>
            <Flex justifyContent="center">
              <Button variant="secondarySmall">
                <FormattedMessage id="recommend_more_tools" />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Paper>
    </Flex>
  )
}

ProgramItems.propTypes = {
  program: PropTypes.array,
  minWidth: PropTypes.string,
}

export default ProgramItems
