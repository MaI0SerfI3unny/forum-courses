import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@/ui'
import HeaderItem from './MenuItem'

export default function HeaderNavMenu({ pages, ...props }) {
  return (
    <Flex {...props}>
      {pages.map(({ id, ...props }) => (
        <HeaderItem key={id} {...props} />
      ))}
    </Flex>
  )
}

HeaderNavMenu.propTypes = {
  pages: PropTypes.array,
}

HeaderNavMenu.defaultProps = {
  pages: [],
  gap: '6.25rem',
}
