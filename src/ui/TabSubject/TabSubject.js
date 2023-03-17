import React from 'react'
import PropTypes from 'prop-types'
import { TabItem } from './TabSubject.styled'
import { Heading, Text, Flex } from '@/ui'

const TabSubject = ({ label, isActive, count, ...props }) => {
  return (
    <TabItem isActive={isActive} {...props}>
      <Heading
        variant="h4m"
        uppercase={1}
        color={isActive ? 'text.blueLight' : 'text.dark'}
      >
        <Flex gap="xxs">
          {label}
          <Text color="text.grayDark">{count}</Text>
        </Flex>
      </Heading>
    </TabItem>
  )
}

TabSubject.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isActive: PropTypes.bool,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TabSubject
