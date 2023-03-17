import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@/ui'

import { system } from 'styled-system'

const Base = styled(Box)(
  system({
    stroke: {
      property: 'stroke',
      scale: 'colors',
    },
    fill: {
      property: 'fill',
      scale: 'colors',
    },
  }),
)

export const Path = styled(Base).attrs({
  as: 'path',
})``
export const Circle = styled(Base).attrs({
  as: 'circle',
})``
export const Defs = styled(Base).attrs({
  as: 'defs',
})``
export const Rect = styled(Base).attrs({
  as: 'rect',
})``
export const Ellipse = styled(Base).attrs({
  as: 'ellipse',
})``
export const Line = styled(Base).attrs({
  as: 'line',
})``

export const IconBaseStyled = styled(Box)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`

const iconSizes = {
  md: 16,
  lg: 24,
  xl: 32,
}

const IconBase = ({ height, width, size, children, viewBox, ...props }) => {
  const iconSize = iconSizes[size] ?? size
  return (
    <IconBaseStyled
      width={iconSize ?? width}
      height={iconSize ?? height ?? width}
      {...props}
    >
      <svg
        width={iconSize ?? width}
        height={iconSize ?? height ?? width}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </IconBaseStyled>
  )
}

IconBase.propTypes = {
  children: PropTypes.any,
  viewBox: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

IconBase.defaultProps = {
  viewBox: '0 0 24 24',
  width: 24,
}

export default IconBase
