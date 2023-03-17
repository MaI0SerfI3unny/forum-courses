import React from 'react'
import { IconBase, Rect } from '@/components'
import PropTypes from 'prop-types'

function Category({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 24 24" {...props}>
      <Rect
        x="3px"
        y="3px"
        width="7px"
        height="7px"
        rx="1"
        stroke={color}
        strokeLinecap="round"
      />
      <Rect
        x="3px"
        y="14px"
        width="7px"
        height="7px"
        rx="1"
        stroke={color}
        strokeLinecap="round"
      />
      <Rect
        x="14px"
        y="3px"
        width="7px"
        height="7px"
        rx="1"
        stroke={color}
        strokeLinecap="round"
      />
      <Rect
        x="14px"
        y="14px"
        width="7px"
        height="7px"
        rx="1"
        stroke={color}
        strokeLinecap="round"
      />
    </IconBase>
  )
}

Category.propTypes = {
  color: PropTypes.string,
}
Category.defaultProps = {
  color: 'icon.grayDark',
}

export default Category
