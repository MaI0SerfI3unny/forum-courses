import React from 'react'
import { IconBase, Path } from '@/components'
import PropTypes from 'prop-types'

function Book({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 16 16" {...props}>
      <Path
        stroke={color}
        d="M13.3333 8V10C13.3333 11.8856 13.3333 12.8284 12.7476 13.4142C12.1618 14 11.219 14 9.33334 14H4.33334C3.41287 14 2.66667 13.2538 2.66667 12.3333V12.3333C2.66667 11.4129 3.41286 10.6667 4.33334 10.6667H9.33334C11.219 10.6667 12.1618 10.6667 12.7476 10.0809C13.3333 9.49509 13.3333 8.55228 13.3333 6.66667V6C13.3333 4.11438 13.3333 3.17157 12.7476 2.58579C12.1618 2 11.219 2 9.33334 2H6.66667C4.78105 2 3.83824 2 3.25246 2.58579C2.66667 3.17157 2.66667 4.11438 2.66667 6V12.3333"
      />
      <Path stroke={color} d="M6 5.33337L10 5.33337" strokeLinecap="round" />
    </IconBase>
  )
}

export default Book

Book.propTypes = {
  color: PropTypes.string,
}
Book.defaultProps = {
  color: 'icon.grayDark',
}
