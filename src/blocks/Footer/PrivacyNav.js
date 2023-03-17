import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@/ui'
import PrivacyItem from './PrivacyItem'

export default function HeaderNavMenu({ pages, ...props }) {
  return (
    <Flex {...props}>
      {pages.map(({ ...props }, idx) => (
        <PrivacyItem key={idx} {...props} />
      ))}
    </Flex>
  )
}

HeaderNavMenu.propTypes = {
  pages: PropTypes.array,
}

HeaderNavMenu.defaultProps = {
  pages: [],
  gap: '1.875rem',
}
